const loadFromLocalStorage = (key, defaultData) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : defaultData;
};

const urlParams = new URLSearchParams(window.location.search);
const recipeId = parseInt(urlParams.get("id"));
const avata = document.getElementsByClassName("avata")[0];
const recipes = loadFromLocalStorage("recipes", []);
const cannedFoods = loadFromLocalStorage("cannedFoods", []);
const favorites = loadFromLocalStorage("favorites");

const recipe = recipes.find((r) => r.id === recipeId);
let add_favoritor = document.getElementsByClassName("add_favorite")[0];
add_favoritor.addEventListener("click", function () {
  let new_favoritor = recipes.find((r) => r.id === recipeId);
  favorites.push(new_favoritor);
  Swal.fire({
    title: "Ngonnnnn",
    text: "Bạn đã thêm vào danh sách yêu thích",
    icon: "success",
  });
  localStorage.setItem("favorites", JSON.stringify(favorites));
});
avata.innerHTML = `
  <img src="${recipe.coverSrc}" alt="avata"/>

`;
if (recipe) {
  // Cập nhật thông tin cơ bản
  document.querySelector(".right .table .text:nth-child(1) p").textContent =
    recipe.name;
  document.querySelector(".right .table .text:nth-child(2) p").textContent =
    recipe.description;
  document.querySelector(".right .table .text:nth-child(3) p").textContent =
    recipe.author;
  document.querySelector(".right .table .text:nth-child(4) p").textContent =
    recipe.totalTime;
  document.querySelector(".right .table .text:nth-child(5) p").textContent =
    recipe.preparationTime;
  document.querySelector(".right .table .text:nth-child(6) p").textContent =
    recipe.finalWeight;
  document.querySelector(".right .table .text:nth-child(7) p").textContent =
    recipe.portions;

  // Cập nhật danh mục
  const categories = recipe.category.map((cat) => cat.name).join(", ");
  document.querySelector(".community .bottom p span").textContent = categories;

  // Cập nhật ingredients
  const ingredientsList = document.querySelector(".ingredients_list .list");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach((foodId) => {
    const food = cannedFoods.find((f) => f.id === foodId);
    const ingredientName = food ? food.name : "Unknown Food";
    const ingredientHTML = `
        <div class="text_ingredients">${ingredientName}</div>
      `;
    ingredientsList.innerHTML += ingredientHTML;
  });
  // Cập nhật cooking method
  const cookingMethod = document.querySelector(".cooking_method div p");
  cookingMethod.textContent = recipe.cookingMethods
    .map((method) => method.content)
    .join(" ");
  // recipe.ingredients.forEach((foodId) => {
  //   const food = cannedFoods.find((f) => f.id === foodId);
  //   const micronutrients = food ? food.micronutrients : "Unknown Food";
  //   document.querySelector(
  //     ".chart .nutrition:nth-child(4) .fiber"
  //   ).textContent = `${micronutrients.fiber}`;
  // }
  // );
  // Cập nhật global analysis
  document.querySelector(".analysis .energy p span").textContent =
    recipe.macronutrients.energy;
  document.querySelector(
    ".chart .nutrition:nth-child(1) .fat"
  ).textContent = `${recipe.macronutrients.fat}g`;
  document.querySelector(
    ".chart .nutrition:nth-child(2) .carbohydrate"
  ).textContent = `${recipe.macronutrients.carbohydrate}g`;
  document.querySelector(
    ".chart .nutrition:nth-child(3) .protein"
  ).textContent = `${recipe.macronutrients.protein}g`;

  // Cập nhật macronutrients chart
  const total =
    recipe.macronutrients.fat +
    recipe.macronutrients.carbohydrate +
    recipe.macronutrients.protein;

  const fat = (recipe.macronutrients.fat / total) * 100;
  const carb = (recipe.macronutrients.carbohydrate / total) * 100;
  const protein = (recipe.macronutrients.protein / total) * 100;

  // Cập nhật nền pie chart
  let pie_chart = document.querySelector(".pie-chart");
  pie_chart.style.background = `conic-gradient(
  #e64a64 0% ${fat}%,
  #e8a878 ${fat}% ${fat + carb}%,
  #17a589 ${fat + carb}% 100%
)`;

  // Hàm đặt label ở giữa mỗi phần
  function setLabelPosition(selector, startPercent, valuePercent) {
    const angleDeg = (startPercent + valuePercent / 2) * 3.6 - 90; // chuyển % sang độ và xoay để bắt đầu từ đỉnh
    const angleRad = (angleDeg * Math.PI) / 180;

    const radius = 80; // khoảng cách từ tâm ra vị trí label (px)
    const centerX = 100;
    const centerY = 100;

    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);

    const label = document.querySelector(selector);
    label.style.left = `${x}px`;
    label.style.top = `${y}px`;
    label.textContent = `${valuePercent.toFixed(1)}%`;
  }

  // Đặt vị trí nhãn động
  setLabelPosition(".fat-label", 0, fat);
  setLabelPosition(".carb-label", fat, carb);
  setLabelPosition(".protein-label", fat + carb, protein);

  // lấy giá trị Micronutrients;
  const Micronutrients = document.getElementsByClassName("table-container")[0];
  recipe.ingredients.forEach((foodId) => {
    const food = cannedFoods.find((f) => f.id === foodId);
    const micronutrients = food ? food.micronutrients : "Unknown Food";
    console.log(micronutrients);
    // đẩy giá trị sang bên HTML
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
} else {
  // Nếu không tìm thấy recipe, hiển thị thông báo
  document.querySelector(".content").innerHTML = "<p>Recipe not found!</p>";
}
