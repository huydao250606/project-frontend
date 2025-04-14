let name_basic = document.querySelector("input[name='name']");
let Description = document.querySelector("input[name='description']");
let totalTime = document.querySelector("input[name='time']");
let preparation = document.querySelector("input[name='preparation_time']");
let Final_weight = document.querySelector("input[name='Final-weight']");
let Portions = document.querySelector("input[name='Portions']");
let avata = document.getElementsByClassName("push_img")[0];
let input_img = document.querySelector('input[name="up_img"]');
let new_category = document.getElementsByClassName("new")[0];
let defaultRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
let select_category = document.getElementById("select_category");
let food = JSON.parse(localStorage.getItem("cannedFoods")) || [];
let ingredientsList = document.querySelector(".ingredients_list");
let push = document.getElementsByClassName("push_lish")[0];
let cooking = document.getElementsByClassName("cooking")[0];
// Biến lưu tổng dinh dưỡng
let totalNutrition = {
  energy: 0,
  fat: 0,
  carbohydrate: 0,
  protein: 0,
};

// Hàm cập nhật lại phần analysis và biểu đồ
function updateNutritionDisplay() {
  // Cập nhật giá trị hiển thị năng lượng và dinh dưỡng
  document.querySelector(".analysis .energy p span").textContent =
    totalNutrition.energy;
  document.querySelector(
    ".analysis .fat"
  ).textContent = `${totalNutrition.fat}g`;
  document.querySelector(
    ".analysis .carbohydrate"
  ).textContent = `${totalNutrition.carbohydrate}g`;
  document.querySelector(
    ".analysis .protein"
  ).textContent = `${totalNutrition.protein}g`;

  // Tính phần trăm macronutrients
  const totalMacro =
    totalNutrition.fat + totalNutrition.carbohydrate + totalNutrition.protein;

  const fatPercent = totalMacro
    ? Math.round((totalNutrition.fat / totalMacro) * 100)
    : 0;
  const carbPercent = totalMacro
    ? Math.round((totalNutrition.carbohydrate / totalMacro) * 100)
    : 0;
  const proteinPercent = totalMacro ? 100 - fatPercent - carbPercent : 0;

  // Cập nhật label phần trăm
  document.querySelector(".fat-label").textContent = `${fatPercent}%`;
  document.querySelector(".carb-label").textContent = `${carbPercent}%`;
  document.querySelector(".protein-label").textContent = `${proteinPercent}%`;

  // Cập nhật biểu đồ bằng conic-gradient
  const pieChart = document.querySelector(".pie-chart");
  pieChart.style.background = `conic-gradient(
    #db4965 0% ${fatPercent}%,
    #e8a878 ${fatPercent}% ${fatPercent + carbPercent}%,
    #17a589 ${fatPercent + carbPercent}% 100%
  )`;
}

// Hàm thêm nguyên liệu vào danh sách
function addIngredientToList(
  name,
  source,
  portion,
  weight,
  energy = 0,
  fat = 0,
  carb = 0,
  protein = 0
) {
  const newIngredient = document.createElement("div");
  newIngredient.classList.add("row1");
  newIngredient.innerHTML = `
    <div class="column1">
      <p class="Ingredients_content">${portion} serving of ${name} (${weight})</p>
    </div>
    <div class="delete" style="height:40.5px">
      <img src="../assets/icons/icon-recipes-deleterecipes.png" alt="delete" />
    </div>
  `;
  ingredientsList.insertBefore(
    newIngredient,
    ingredientsList.querySelector(".search")
  );

  // Cộng vào tổng dinh dưỡng
  totalNutrition.energy += parseInt(energy);
  totalNutrition.fat += parseInt(fat);
  totalNutrition.carbohydrate += parseInt(carb);
  totalNutrition.protein += parseInt(protein);

  updateNutritionDisplay();

  // Xóa nguyên liệu
  newIngredient
    .querySelector(".delete img")
    .addEventListener("click", function () {
      newIngredient.remove();

      // Trừ lại dinh dưỡng
      totalNutrition.energy -= parseInt(energy);
      totalNutrition.fat -= parseInt(fat);
      totalNutrition.carbohydrate -= parseInt(carb);
      totalNutrition.protein -= parseInt(protein);

      updateNutritionDisplay();
    });
}

// Xử lý sự kiện thêm nguyên liệu có sẵn trong bảng
document
  .querySelectorAll(".nutritional_table .table_body .add")
  .forEach((addBtn) => {
    addBtn.addEventListener("click", function () {
      const row = this.closest(".table_body");
      const name = row.querySelector(".row span:nth-child(1)").textContent;
      const source = row.querySelector(".row span:nth-child(2)").textContent;
      const portion = row.querySelector(
        ".row_input span:nth-child(1)"
      ).textContent;
      const weight = row.querySelector(
        ".row_input span:nth-child(3)"
      ).textContent;

      const energy = row
        .querySelector(".number span:nth-child(1)")
        .textContent.replace(" kcal", "");
      const fat = row
        .querySelector(".number span:nth-child(2)")
        .textContent.replace("g", "");
      const carb = row
        .querySelector(".number span:nth-child(3)")
        .textContent.replace("g", "");
      const protein = row
        .querySelector(".number span:nth-child(4)")
        .textContent.replace("g", "");

      addIngredientToList(
        name,
        source,
        portion,
        weight,
        energy,
        fat,
        carb,
        protein
      );

      Swal.fire({
        icon: "success",
        title: "Đã Thêm Nguyên Liệu",
        text: `${name} đã được thêm vào công thức của bạn!`,
      });
    });
  });

// Xử lý thêm nguyên liệu mới bằng tay
const addNewIngredientInput = document.querySelector(
  ".search .input_search input"
);
addNewIngredientInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && this.value.trim() !== "") {
    const newIngredientName = this.value.trim();
    addIngredientToList(
      newIngredientName,
      "Tùy chỉnh",
      "1",
      "100g",
      0,
      0,
      0,
      0
    );

    Swal.fire({
      icon: "success",
      title: "Đã Thêm Nguyên Liệu Mới",
      text: `${newIngredientName} đã được thêm vào công thức của bạn!`,
    });

    this.value = "";
  }
});

// Sự kiện hiển thị danh sách danh mục khi nhấn "New category"
new_category.addEventListener("click", function () {
  new_category.style.display = "none";
  select_category.style.display = "flex";
});

// Tạo danh sách các danh mục duy nhất từ dữ liệu công thức
const uniqueCategories = (() => {
  const seenIds = {};
  const result = [];

  defaultRecipes.forEach((recipe) => {
    if (Array.isArray(recipe.category)) {
      recipe.category.forEach((category) => {
        if (!seenIds[category.id]) {
          seenIds[category.id] = true;
          result.push(category);
        }
      });
    }
  });
  // Thêm các tùy chọn danh mục vào select
  for (let i of result) {
    let new_option = `
      <option value="${i.name}" >${i.name}</option>
    `;
    select_category.innerHTML += new_option;
  }
})();

// Sự kiện khi thay đổi lựa chọn danh mục
let index = null;
select_category.addEventListener("change", function () {
  // Lấy giá trị danh mục được chọn
  const selectedCategory = select_category.value;
  // Tìm chỉ số công thức đầu tiên có danh mục khớp
  index = defaultRecipes.findIndex((element) => {
    return element.category.some(
      (category) => category.name === selectedCategory
    );
  });
  console.log(food[index]);
});

// Sự kiện nhấn để thêm link ảnh
avata.addEventListener("click", function () {
  avata.style.display = "none";
  input_img.style.display = "flex";
});

// Xử lý sự kiện Enter
input_img.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const imgUrl = input_img.value.trim();
    if (imgUrl) {
      avata.innerHTML = `<img src="${imgUrl}" alt="avata" class="update-avata" />`;
      avata.style.display = "block";
      avata.style.borderColor = "transparent";
      input_img.style.display = "none";
    }
  }
});

// Kiểm tra việc tải ảnh lên
input_img.addEventListener("input", function () {
  if (input_img.value.length === 0) {
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true,
    });
    return;
  } else {
    console.log(input_img.value);
  }
});

// Kiểm tra các trường nhập liệu cơ bản
name_basic.addEventListener("input", function () {
  if (name_basic.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Lỗi...",
      text: "Không được để trống",
    });
    return;
  }
});
Description.addEventListener("input", function () {
  if (Description.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Lỗi...",
      text: "Không được để trống",
    });
    return;
  }
});
totalTime.addEventListener("input", function () {
  if (totalTime.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Lỗi...",
      text: "Không được để trống",
    });
    return;
  }
});
preparation.addEventListener("input", function () {
  if (preparation.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Lỗi...",
      text: "Không được để trống",
    });
    return;
  }
});
Final_weight.addEventListener("input", function () {
  if (Final_weight.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Lỗi...",
      text: "Không được để trống",
    });
    return;
  }
});
Portions.addEventListener("input", function () {
  if (Portions.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Lỗi...",
      text: "Không được để trống",
    });
    return;
  }
});
cooking.addEventListener("input", function () {
  if (cooking.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Lỗi...",
      text: "Không được để trống",
    });
    return;
  }
});
let ingredients_list = Array.from(
  document.getElementsByClassName("Ingredients_content")
).map((element) => element.textContent);
push.addEventListener("click", function () {
  if (
    name_basic.value.length === 0 ||
    Description.value.length === 0 ||
    totalTime.value.length === 0 ||
    preparation.value.length === 0 ||
    Final_weight.value.length === 0 ||
    Portions.value.length === 0
  ) {
    Swal.fire({
      icon: "error",
      title: "Lỗi...",
      text: "Chưa thêm nội dung ở Basic information",
    });
    return;
  }
  if (input_img.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Lỗi...",
      text: "Chưa thêm link ảnh",
    });
    return;
  }
  if (cooking.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Lỗi...",
      text: "Chưa thêm phương thức nấu ăn",
    });
    return;
  } else {
    Swal.fire({
      icon: "success",
      title: "Thêm thành công",
    });
    setTimeout(() => {
      window.location.href = "../page/recipes.html";
    }, 1000);
  }
  let new_recipe = {
    id: defaultRecipes.length + 1,
    coverSrc: input_img.value,
    name: name_basic.value,
    description: Description.value,
    author: "Joana Jardim",
    totalTime: totalTime.value,
    favorite: 49,
    preparationTime: preparation.value,
    finalWeight: Final_weight.value,
    portions: Portions.value,
    ingredients: [+index],
    cookingMethods: [
      {
        id: 1,
        content: cooking.value,
      },
    ],
    category: [{ name: select_category.value }],
    macronutrients: food[index].macronutrients,
  };
  defaultRecipes.push(new_recipe);
  console.log(defaultRecipes);
  localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
});
