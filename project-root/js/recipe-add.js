// Khai báo các biến cơ bản
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
// Hàm thêm nguyên liệu vào danh sách
function addIngredientToList(name, source, portion, weight) {
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

  // Thêm chức năng xóa nguyên liệu
  newIngredient
    .querySelector(".delete img")
    .addEventListener("click", function () {
      newIngredient.remove();
    });
}

// Sự kiện khi nhấn nút "+" để chọn nguyên liệu từ bảng dinh dưỡng
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

      // Thêm nguyên liệu đã chọn vào danh sách
      addIngredientToList(name, source, portion, weight);

      Swal.fire({
        icon: "success",
        title: "Đã Thêm Nguyên Liệu",
        text: `${name} đã được thêm vào công thức của bạn!`,
      });
    });
  });

// Sự kiện thêm nguyên liệu mới khi nhấn Enter trong ô nhập liệu
const addNewIngredientInput = document.querySelector(
  ".search .input_search input"
);
addNewIngredientInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && this.value.trim() !== "") {
    const newIngredientName = this.value.trim();

    // Thêm nguyên liệu tùy chỉnh với giá trị mặc định
    addIngredientToList(newIngredientName, "Tùy chỉnh", "1", "100g");
    Swal.fire({
      icon: "success",
      title: "Đã Thêm Nguyên Liệu Mới",
      text: `${newIngredientName} đã được thêm vào công thức của bạn!`,
    });

    this.value = ""; // Xóa nội dung ô nhập liệu
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
    recipe.category.forEach((category) => {
      if (!seenIds[category.id]) {
        seenIds[category.id] = true;
        result.push(category);
      }
    });
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
  let macronutrients = food[index].macronutrients;

  // Cập nhật phân tích tổng quát
  document.querySelector(".fat").style.borderColor = "#DB4965";
  document.querySelector(".analysis .energy p span").textContent =
    macronutrients.energy;
  document.querySelector(
    ".chart .nutrition:nth-child(1) .fat"
  ).textContent = `${macronutrients.fat}g`;
  document.querySelector(
    ".chart .nutrition:nth-child(2) .carbohydrate"
  ).textContent = `${macronutrients.carbohydrate}g`;
  document.querySelector(".protein").style.borderColor = "#1AB394";
  document.querySelector(
    ".chart .nutrition:nth-child(3) .protein"
  ).textContent = `${macronutrients.protein}g`;

  // Tính toán tỷ lệ phần trăm cho biểu đồ tròn
  const total =
    macronutrients.fat + macronutrients.carbohydrate + macronutrients.protein;

  const fat = (macronutrients.fat / total) * 100;
  const carb = (macronutrients.carbohydrate / total) * 100;
  const protein = (macronutrients.protein / total) * 100;

  // Cập nhật màu nền biểu đồ tròn
  let pie_chart = document.querySelector(".pie-chart");
  pie_chart.style.background = `conic-gradient(
    #e64a64 0% ${fat}%,
    #e8a878 ${fat}% ${fat + carb}%,
    #17a589 ${fat + carb}% 100%
  )`;

  // Hàm định vị trí nhãn trên biểu đồ tròn
  function setLabelPosition(selector, startPercent, valuePercent) {
    const angleDeg = (startPercent + valuePercent / 2) * 3.6 - 90;
    const angleRad = (angleDeg * Math.PI) / 180;

    const radius = 80;
    const centerX = 100;
    const centerY = 100;

    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);

    const label = document.querySelector(selector);
    label.style.left = `${x}px`;
    label.style.top = `${y}px`;
    label.textContent = `${valuePercent.toFixed(1)}%`;
  }

  // Đặt vị trí các nhãn
  setLabelPosition(".fat-label", 0, fat);
  setLabelPosition(".carb-label", fat, carb);
  setLabelPosition(".protein-label", fat + carb, protein);

  // Cập nhật vi chất dinh dưỡng
  let micronutrients = food[index].micronutrients;
  document.querySelector(
    "tbody tr:nth-child(1)  td:nth-child(2)  span"
  ).textContent = micronutrients.sodium;
  document.querySelector(
    "tbody  tr:nth-child(2)  td:nth-child(2)  span"
  ).textContent = micronutrients.vitaminA;
  document.querySelector(
    "tbody tr:nth-child(3)  td:nth-child(2)  span"
  ).textContent = micronutrients.vitaminB6;
  document.querySelector(
    "tbody tr:nth-child(4)  td:nth-child(2)  span"
  ).textContent = micronutrients.vitaminB12;
  document.querySelector(
    "tbody tr:nth-child(5)  td:nth-child(2)  span"
  ).textContent = micronutrients.vitaminC;
  document.querySelector(
    "tbody tr:nth-child(6)  td:nth-child(2)  span"
  ).textContent = micronutrients.vitaminD;
  document.querySelector(
    "tbody tr:nth-child(7)  td:nth-child(2)  span"
  ).textContent = micronutrients.vitaminE;
  document.querySelector(
    "tbody tr:nth-child(8)  td:nth-child(2)  span"
  ).textContent = micronutrients.vitaminK;
  document.querySelector(
    "tbody tr:nth-child(9)  td:nth-child(2)  span"
  ).textContent = micronutrients.sugars;
  document.querySelector(
    "tbody tr:nth-child(10)  td:nth-child(2)  span"
  ).textContent = micronutrients.calcium;
  document.querySelector(
    "tbody tr:nth-child(11)  td:nth-child(2)  span"
  ).textContent = micronutrients.iron;
  document.querySelector(
    "tbody tr:nth-child(12)  td:nth-child(2)  span"
  ).textContent = micronutrients.magnesium;
  document.querySelector(
    "tbody tr:nth-child(13)  td:nth-child(2)  span"
  ).textContent = micronutrients.phosphorus;
  document.querySelector(
    "tbody tr:nth-child(14)  td:nth-child(2)  span"
  ).textContent = micronutrients.potassium;
  document.querySelector(
    "tbody tr:nth-child(15)  td:nth-child(2)  span"
  ).textContent = micronutrients.zinc;
  document.querySelector(
    "tbody tr:nth-child(16)  td:nth-child(2)  span"
  ).textContent = micronutrients.copper;
  document.querySelector(
    "tbody tr:nth-child(17)  td:nth-child(2)  span"
  ).textContent = micronutrients.fluoride;
  document.querySelector(
    "tbody tr:nth-child(18)  td:nth-child(2)  span"
  ).textContent = micronutrients.manganese;
  document.querySelector(
    "tbody tr:nth-child(19)  td:nth-child(2)  span"
  ).textContent = micronutrients.selenium;
  document.querySelector(
    "tbody tr:nth-child(20)  td:nth-child(2)  span"
  ).textContent = micronutrients.thiamin;
  document.querySelector(
    "tbody tr:nth-child(21)  td:nth-child(2)  span"
  ).textContent = micronutrients.riboflavin;
  document.querySelector(
    "tbody tr:nth-child(22)  td:nth-child(2)  span"
  ).textContent = micronutrients.niacin;
  document.querySelector(
    "tbody tr:nth-child(23)  td:nth-child(2)  span"
  ).textContent = micronutrients.pantothenicAcid;
  document.querySelector(
    "tbody tr:nth-child(24)  td:nth-child(2)  span"
  ).textContent = micronutrients.folateTotal;
});

// Sự kiện nhấn để thêm link ảnh
avata.addEventListener("click", function () {
  avata.style.display = "none";
  input_img.style.display = "flex";
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
