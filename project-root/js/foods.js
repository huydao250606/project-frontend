const foods = [
  {
    name: "Ackee, canned, drained",
    energy: 151,
    fat: 15,
    carbohydrate: 1,
    protein: 3,
    category: "Fruit",
    quantity: "100g",
  },
  {
    name: "Agar, dried, soaked and drained",
    energy: 2,
    fat: 0,
    carbohydrate: 0,
    protein: 0,
    category: "Seaweed",
    quantity: "100g",
  },
  {
    name: "Allspice, ground",
    energy: null,
    fat: 9,
    carbohydrate: null,
    protein: 6,
    category: "Spice",
    quantity: "10g",
  },
  {
    name: "Amaranth leaves, boiled in unsalted water",
    energy: 16,
    fat: 0,
    carbohydrate: 0,
    protein: 3,
    category: "Vegetable",
    quantity: "80g",
  },
  {
    name: "Amaranth leaves, raw",
    energy: 18,
    fat: 0,
    carbohydrate: 0,
    protein: 4,
    category: "Vegetable",
    quantity: "80g",
  },
  {
    name: "Amla",
    energy: 58,
    fat: 0,
    carbohydrate: 14,
    protein: 1,
    category: "Fruit",
    quantity: "90g",
  },
  {
    name: "Apples, cooking, baked with sugar, flesh only, weighed with skin",
    energy: 57,
    fat: 0,
    carbohydrate: 14,
    protein: 0,
    category: "Fruit",
    quantity: "120g",
  },
  {
    name: "Apples, cooking, baked without sugar, flesh only, weighed with skin",
    energy: 40,
    fat: 0,
    carbohydrate: 10,
    protein: 0,
    category: "Fruit",
    quantity: "120g",
  },
  {
    name: "Apples, cooking, stewed with sugar, flesh only",
    energy: 81,
    fat: 0,
    carbohydrate: 21,
    protein: 0,
    category: "Fruit",
    quantity: "120g",
  },
];

// const savedFoods = localStorage.getItem("foods");
// if (savedFoods) {
//   foods.splice(0, foods.length, ...JSON.parse(savedFoods));
// }

let currentFoods = [...foods];
let currentFixIndex = null;
let currentPage = 1;
const ITEMS_PER_PAGE = 4;

function paginateFoods(foodList, page = 1) {
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = page * ITEMS_PER_PAGE;
  return foodList.slice(start, end);
}

function renderFoods(foodList) {
  const container = document.getElementById("food-list");
  container.innerHTML = "";

  foodList.forEach((food) => {
    const item = document.createElement("div");
    item.className = "food-item food-child";

    item.innerHTML = `
        <div class="food-left">
          <div class="food-name">${food.name}</div>
          <div class="food-source">McCance and Widdowson's</div>
        </div>
        <div class="food-right">
          <div class="food-nutrient">
            <div class="value">${
              food.energy != null ? food.energy + " kcal" : "-"
            }</div>
            <div class="label">Energy</div>
          </div>
          <div class="food-nutrient">
            <div class="value">${food.fat != null ? food.fat + " g" : "-"}</div>
            <div class="label">Fat</div>
          </div>
          <div class="food-nutrient">
            <div class="value">${
              food.carbohydrate != null ? food.carbohydrate + " g" : "-"
            }</div>
            <div class="label">Carbohydrate</div>
          </div>
          <div class="food-nutrient">
            <div class="value">${
              food.protein != null ? food.protein + " g" : "-"
            }</div>
            <div class="label">Protein</div>
          </div>
        </div>`;
    container.appendChild(item);
  });

  attachEditEvents();
}

function renderFoodsWithPagination() {
  const paginated = paginateFoods(currentFoods, currentPage);
  renderFoods(paginated);
  renderPagination(currentFoods.length, currentPage);
}

function renderPagination(totalItems, page) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const paginationTable = document.querySelector(".footer-icon-food tr");
  paginationTable.innerHTML = "";

  for (let i = 1; i <= Math.min(totalPages, 5); i++) {
    const td = document.createElement("td");
    td.innerHTML = `<span ${
      i === page ? 'class="active-page"' : ""
    }>${i}</span>`;
    td.addEventListener("click", () => {
      currentPage = i;
      renderFoodsWithPagination();
    });
    paginationTable.appendChild(td);
  }

  if (totalPages > 5) {
    const dot = document.createElement("td");
    dot.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;
    paginationTable.appendChild(dot);
  }

  if (page < totalPages) {
    const next = document.createElement("td");
    next.innerHTML = `<i class="fa-solid fa-forward"></i>`;
    next.addEventListener("click", () => {
      currentPage++;
      renderFoodsWithPagination();
    });
    paginationTable.appendChild(next);

    const last = document.createElement("td");
    last.innerHTML = `<i class="fa-solid fa-forward-fast"></i>`;
    last.addEventListener("click", () => {
      currentPage = totalPages;
      renderFoodsWithPagination();
    });
    paginationTable.appendChild(last);
  }
}

function attachEditEvents() {
  document.querySelectorAll(".food-item").forEach((item, index) => {
    item.onclick = () => {
      currentFixIndex = index;
      const food = currentFoods[index];
      const fixInputs = document.querySelectorAll("#fix-container input");
      const fixValues = [
        food.name || "",
        food.category || "",
        food.quantity || "",
        food.energy || "",
        food.fat || "",
        food.carbohydrate || "",
        food.protein || "",
      ];
      fixInputs.forEach((input, i) => (input.value = fixValues[i]));
      document.getElementById("fix-container").classList.add("show");
      document.getElementById("coat").classList.add("show");
    };
  });
}

// === TÌM KIẾM
document.getElementById("search-input").addEventListener("input", function () {
  const keyword = this.value.toLowerCase().trim();
  currentFoods = foods.filter((f) => f.name.toLowerCase().includes(keyword));
  currentPage = 1;
  renderFoodsWithPagination();
});

// === SẮP XẾP
document.getElementById("sort-toggle").addEventListener("click", () => {
  document.getElementById("sort-dropdown").classList.toggle("show");
});
document.querySelectorAll("#sort-dropdown div").forEach((option) => {
  option.addEventListener("click", () => {
    const key = option.dataset.sort;
    document.getElementById("sort-display").textContent = option.textContent;
    currentFoods.sort((a, b) => {
      const valA = a[key] ?? -Infinity;
      const valB = b[key] ?? -Infinity;
      return valB - valA;
    });
    renderFoodsWithPagination();
    document.getElementById("sort-dropdown").classList.remove("show");
  });
});

// === LỌC CATEGORY
document.getElementById("category-filter").addEventListener("change", (e) => {
  const selected = e.target.value;
  currentFoods =
    selected === "all"
      ? [...foods]
      : foods.filter((f) => f.category === selected);
  currentPage = 1;
  renderFoodsWithPagination();
});

// === MỞ / ĐÓNG MODAL
document.getElementById("create-food").onclick = () => {
  document.getElementById("add-container").classList.add("show");
  document.getElementById("coat").classList.add("show");
};
document.getElementById("close-food-add").onclick = () => {
  document.getElementById("add-container").classList.remove("show");
  document.getElementById("coat").classList.remove("show");
};
document.getElementById("close-food-fix").onclick = () => {
  document.getElementById("fix-container").classList.remove("show");
  document.getElementById("coat").classList.remove("show");
};

// === THÊM MỚI MÓN ĂN
document.querySelector("#add-container .cancel").onclick = () => {
  document.getElementById("add-container").classList.remove("show");
  document.getElementById("coat").classList.remove("show");
};
document.querySelector("#add-container .save").onclick = () => {
  const inputs = document.querySelectorAll("#add-container input");
  const newFood = {
    name: inputs[0].value.trim(),
    category: inputs[1].value.trim(),
    quantity: inputs[2].value.trim(),
    energy: Number(inputs[3].value),
    fat: Number(inputs[4].value),
    carbohydrate: Number(inputs[5].value),
    protein: Number(inputs[6].value),
  };
  //   if (newFood.name.includes("xyanua")) {
  //     Swal.fire({
  //       title: "Không được thêmm món ăn xyanua",
  //       icon: "error",
  //       draggable: true,
  //     });
  //     return;
  //   }
  if (
    !newFood.name ||
    !newFood.category ||
    !newFood.quantity ||
    !newFood.energy ||
    !newFood.fat ||
    !newFood.carbohydrate ||
    !newFood.protein
  ) {
    Swal.fire({
      title: "Không được để trống thông tin",
      icon: "error",
      draggable: true,
    });
    return;
  } else {
    Swal.fire({
      title: "Thêm thành công",
      icon: "success",
      draggable: true,
    });
  }

  foods.unshift(newFood);
  currentFoods = [...foods];
  currentPage = 1;
  renderFoodsWithPagination();

  //   localStorage.setItem("foods", JSON.stringify(foods));

  document.getElementById("add-container").classList.remove("show");
  document.getElementById("coat").classList.remove("show");
  inputs.forEach((input) => (input.value = ""));
};

// === CHỈNH SỬA MÓN ĂN
document.querySelector(".btn-cancel").onclick = () => {
  document.getElementById("fix-container").classList.remove("show");
  document.getElementById("coat").classList.remove("show");
};
document.querySelector(".btn-save").onclick = () => {
  if (currentFixIndex === null) return;

  const inputs = document.querySelectorAll("#fix-container input");
  const updated = {
    ...currentFoods[currentFixIndex],
    name: inputs[0].value.trim(),
    category: inputs[1].value.trim(),
    quantity: inputs[2].value.trim(),
    energy: Number(inputs[3].value),
    fat: Number(inputs[4].value),
    carbohydrate: Number(inputs[5].value),
    protein: Number(inputs[6].value),
  };

  const originalIndex = foods.findIndex(
    (f) => f.name === currentFoods[currentFixIndex].name
  );
  if (originalIndex !== -1) foods[originalIndex] = updated;
  currentFoods[currentFixIndex] = updated;

  //   localStorage.setItem("foods", JSON.stringify(foods));

  currentPage = 1;
  renderFoodsWithPagination();
  document.getElementById("fix-container").classList.remove("show");
  document.getElementById("coat").classList.remove("show");
};

// === KHỞI ĐỘNG
renderFoodsWithPagination();
