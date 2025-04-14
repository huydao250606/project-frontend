let favorites_recip = JSON.parse(localStorage.getItem("favorites")) || [
  {
    id: 1,
    coverSrc:
      "https://nutrimstorageaccount.blob.core.windows.net/rails-active-storage-8qaim5uox87nr22tst617nzt8",
    name: "Turmeric Roasted Cauliflower Salad (lowfodmap)",
    description:
      "Our roasted cauliflower salad with turmeric is low in calories and packed with punchy flavor.",
    author: "Joana Jardim",
    totalTime: "00:40",
    preparationTime: "00:40",
    finalWeight: "978.8 grams",
    portions: 4,
    ingredients: ["food_01", "food_02"],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Heat the oven to 200C/fan 180C/gas 6. Put the cauliflower in an ovenproof dish or tin,",
      },
    ],
    category: [
      { id: 1, name: "vegetarian" },
      { id: 2, name: "appetizer" },
    ],
    quantity: 100,
    favorite: 49,
    source: "McCance and Widdowson",
    macronutrients: {
      energy: 143.0,
      fat: 6.0,
      carbohydrate: 18.0,
      protein: 5.0,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: 3.2,
      sodium: 200.0,
      water: 80.0,
      vitaminA: 10,
      vitaminB6: 0.1,
      vitaminB12: 0.0,
      vitaminC: 45.0,
      vitaminD: 0.0,
      vitaminE: 1.2,
      vitaminK: 15,
      starch: 0.0,
      lactose: 0.0,
      alcohol: 0,
      caffeine: 0,
      sugars: 2.5,
      calcium: 40.0,
      iron: 1.0,
      magnesium: 25.0,
      phosphorus: 60.0,
      potassium: 300.0,
      zinc: 0.5,
      copper: 0.1,
      fluoride: 0,
      manganese: 0.2,
      selenium: 1,
      thiamin: 0.05,
      riboflavin: 0.06,
      niacin: 0.8,
      pantothenicAcid: 0.3,
      folateTotal: 50.0,
      folicAcid: 0,
      fattyAcidsTotalTrans: 0.0,
      fattyAcidsTotalSaturated: 1.0,
      fattyAcidsTotalMonounsaturated: 3.0,
      fattyAcidsTotalPolyunsaturated: 1.5,
      chloride: 300.0,
    },
  },
  {
    id: 2,
    coverSrc: "https://example.com/grilled-zucchini.jpg",
    name: "Grilled Zucchini with Lemon Herb Dressing",
    description:
      "A light and refreshing zucchini dish with a zesty lemon herb dressing.",
    author: "Michael Smith",
    totalTime: "00:25",
    preparationTime: "00:15",
    finalWeight: "450 grams",
    portions: 2,
    ingredients: ["zucchini", "lemon", "herbs"],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Preheat the grill to medium-high heat. Slice the zucchini into long strips.",
      },
    ],
    category: [
      { id: 1, name: "vegetarian" },
      { id: 2, name: "side dish" },
    ],
    quantity: 100,
    favorite: 10,
    source: "USDA",
    macronutrients: {
      energy: 90.0,
      fat: 4.5,
      carbohydrate: 10.0,
      protein: 2.0,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: 2.0,
      sodium: 150.0,
      water: 85.0,
      vitaminA: 20,
      vitaminB6: 0.08,
      vitaminB12: 0.0,
      vitaminC: 20.0,
      vitaminD: 0.0,
      vitaminE: 0.5,
      vitaminK: 10,
      starch: 0.0,
      lactose: 0.0,
      alcohol: 0,
      caffeine: 0,
      sugars: 3.0,
      calcium: 30.0,
      iron: 0.6,
      magnesium: 20.0,
      phosphorus: 40.0,
      potassium: 250.0,
      zinc: 0.3,
      copper: 0.05,
      fluoride: 0,
      manganese: 0.1,
      selenium: 0,
      thiamin: 0.03,
      riboflavin: 0.04,
      niacin: 0.5,
      pantothenicAcid: 0.2,
      folateTotal: 30.0,
      folicAcid: 0,
      fattyAcidsTotalTrans: 0.0,
      fattyAcidsTotalSaturated: 0.5,
      fattyAcidsTotalMonounsaturated: 2.0,
      fattyAcidsTotalPolyunsaturated: 1.0,
      chloride: 200.0,
    },
  },
  {
    id: 3,
    coverSrc: "https://example.com/spicy-chickpea-stew.jpg",
    name: "Spicy Chickpea Stew",
    description:
      "A hearty and spicy stew made with chickpeas and fresh vegetables.",
    author: "Emily Brown",
    totalTime: "01:00",
    preparationTime: "00:20",
    finalWeight: "1200 grams",
    portions: 6,
    ingredients: ["chickpeas", "tomatoes", "spices"],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Soak the chickpeas overnight. Drain and rinse them before cooking.",
      },
    ],
    category: [
      { id: 1, name: "vegan" },
      { id: 2, name: "main course" },
    ],
    quantity: 100,
    favorite: 4,
    source: "McCance and Widdowson",
    macronutrients: {
      energy: 180.0,
      fat: 5.0,
      carbohydrate: 25.0,
      protein: 8.0,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: 6.0,
      sodium: 300.0,
      water: 70.0,
      vitaminA: 15,
      vitaminB6: 0.15,
      vitaminB12: 0.0,
      vitaminC: 10.0,
      vitaminD: 0.0,
      vitaminE: 0.8,
      vitaminK: 5,
      starch: 10.0,
      lactose: 0.0,
      alcohol: 0,
      caffeine: 0,
      sugars: 4.0,
      calcium: 50.0,
      iron: 2.0,
      magnesium: 50.0,
      phosphorus: 100.0,
      potassium: 400.0,
      zinc: 1.0,
      copper: 0.2,
      fluoride: 0,
      manganese: 0.5,
      selenium: 2,
      thiamin: 0.1,
      riboflavin: 0.05,
      niacin: 1.0,
      pantothenicAcid: 0.4,
      folateTotal: 80.0,
      folicAcid: 0,
      fattyAcidsTotalTrans: 0.0,
      fattyAcidsTotalSaturated: 0.8,
      fattyAcidsTotalMonounsaturated: 2.0,
      fattyAcidsTotalPolyunsaturated: 1.2,
      chloride: 350.0,
    },
  },
  {
    id: 4,
    coverSrc: "https://example.com/quinoa-black-bean-salad.jpg",
    name: "Quinoa and Black Bean Salad",
    description:
      "A nutritious salad with quinoa, black beans, and fresh veggies.",
    author: "Sarah Lee",
    totalTime: "00:30",
    preparationTime: "00:15",
    finalWeight: "600 grams",
    portions: 4,
    ingredients: ["quinoa", "black beans", "corn"],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Cook the quinoa according to package instructions. Let it cool.",
      },
    ],
    category: [
      { id: 1, name: "vegan" },
      { id: 2, name: "salad" },
    ],
    quantity: 100,
    favorite: 3,
    source: "USDA",
    macronutrients: {
      energy: 160.0,
      fat: 3.0,
      carbohydrate: 28.0,
      protein: 7.0,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: 5.0,
      sodium: 180.0,
      water: 65.0,
      vitaminA: 5,
      vitaminB6: 0.12,
      vitaminB12: 0.0,
      vitaminC: 8.0,
      vitaminD: 0.0,
      vitaminE: 0.6,
      vitaminK: 3,
      starch: 15.0,
      lactose: 0.0,
      alcohol: 0,
      caffeine: 0,
      sugars: 2.0,
      calcium: 20.0,
      iron: 1.5,
      magnesium: 60.0,
      phosphorus: 120.0,
      potassium: 350.0,
      zinc: 0.8,
      copper: 0.3,
      fluoride: 0,
      manganese: 0.6,
      selenium: 3,
      thiamin: 0.08,
      riboflavin: 0.07,
      niacin: 0.7,
      pantothenicAcid: 0.3,
      folateTotal: 60.0,
      folicAcid: 0,
      fattyAcidsTotalTrans: 0.0,
      fattyAcidsTotalSaturated: 0.4,
      fattyAcidsTotalMonounsaturated: 1.0,
      fattyAcidsTotalPolyunsaturated: 1.0,
      chloride: 250.0,
    },
  },
  {
    id: 5,
    coverSrc: "https://example.com/avocado-toast.jpg",
    name: "Avocado Toast with Poached Egg",
    description:
      "A classic breakfast dish with creamy avocado and a perfectly poached egg.",
    author: "David Kim",
    totalTime: "00:20",
    preparationTime: "00:10",
    finalWeight: "300 grams",
    portions: 2,
    ingredients: ["avocado", "egg", "bread"],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Toast the bread. Mash the avocado and spread it on the toast.",
      },
    ],
    category: [
      { id: 1, name: "vegetarian" },
      { id: 2, name: "breakfast" },
    ],
    quantity: 100,
    favorite: 9,
    source: "McCance and Widdowson",
    macronutrients: {
      energy: 200.0,
      fat: 12.0,
      carbohydrate: 15.0,
      protein: 8.0,
    },
    micronutrients: {
      cholesterol: 180.0,
      fiber: 4.0,
      sodium: 220.0,
      water: 70.0,
      vitaminA: 50,
      vitaminB6: 0.2,
      vitaminB12: 0.5,
      vitaminC: 5.0,
      vitaminD: 1.0,
      vitaminE: 1.5,
      vitaminK: 20,
      starch: 5.0,
      lactose: 0.0,
      alcohol: 0,
      caffeine: 0,
      sugars: 1.0,
      calcium: 60.0,
      iron: 1.2,
      magnesium: 30.0,
      phosphorus: 90.0,
      potassium: 400.0,
      zinc: 0.7,
      copper: 0.15,
      fluoride: 0,
      manganese: 0.3,
      selenium: 10,
      thiamin: 0.06,
      riboflavin: 0.1,
      niacin: 0.9,
      pantothenicAcid: 0.5,
      folateTotal: 70.0,
      folicAcid: 0,
      fattyAcidsTotalTrans: 0.0,
      fattyAcidsTotalSaturated: 2.0,
      fattyAcidsTotalMonounsaturated: 6.0,
      fattyAcidsTotalPolyunsaturated: 2.0,
      chloride: 320.0,
    },
  },
  {
    id: 6,
    coverSrc: "https://example.com/lentil-soup.jpg",
    name: "Lentil Soup with Spinach",
    description: "A comforting lentil soup with fresh spinach and warm spices.",
    author: "Anna Taylor",
    totalTime: "00:45",
    preparationTime: "00:15",
    finalWeight: "1000 grams",
    portions: 5,
    ingredients: ["lentils", "spinach", "carrots"],
    cookingMethods: [
      {
        id: 1,
        content: "STEP 1 Rinse the lentils and set aside. Chop the vegetables.",
      },
    ],
    category: [
      { id: 1, name: "vegan" },
      { id: 2, name: "soup" },
    ],
    quantity: 100,
    favorite: 2,
    source: "USDA",
    macronutrients: {
      energy: 130.0,
      fat: 2.0,
      carbohydrate: 20.0,
      protein: 9.0,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: 7.0,
      sodium: 250.0,
      water: 75.0,
      vitaminA: 30,
      vitaminB6: 0.18,
      vitaminB12: 0.0,
      vitaminC: 15.0,
      vitaminD: 0.0,
      vitaminE: 0.7,
      vitaminK: 50,
      starch: 8.0,
      lactose: 0.0,
      alcohol: 0,
      caffeine: 0,
      sugars: 2.5,
      calcium: 40.0,
      iron: 2.5,
      magnesium: 40.0,
      phosphorus: 110.0,
      potassium: 380.0,
      zinc: 1.2,
      copper: 0.25,
      fluoride: 0,
      manganese: 0.4,
      selenium: 1,
      thiamin: 0.09,
      riboflavin: 0.08,
      niacin: 0.6,
      pantothenicAcid: 0.3,
      folateTotal: 90.0,
      folicAcid: 0,
      fattyAcidsTotalTrans: 0.0,
      fattyAcidsTotalSaturated: 0.3,
      fattyAcidsTotalMonounsaturated: 0.5,
      fattyAcidsTotalPolyunsaturated: 0.7,
      chloride: 300.0,
    },
  },
  {
    id: 7,
    coverSrc: "https://example.com/sweet-potato-kale.jpg",
    name: "Sweet Potato and Kale Stir-Fry",
    description:
      "A vibrant stir-fry with sweet potatoes and kale, seasoned with garlic.",
    author: "Lisa Nguyen",
    totalTime: "00:35",
    preparationTime: "00:15",
    finalWeight: "500 grams",
    portions: 3,
    ingredients: ["sweet potato", "kale", "garlic"],
    cookingMethods: [
      {
        id: 1,
        content: "STEP 1 Peel and cube the sweet potatoes. Heat oil in a pan.",
      },
    ],
    category: [
      { id: 1, name: "vegan" },
      { id: 2, name: "side dish" },
    ],
    quantity: 100,
    favorite: 6,
    source: "McCance and Widdowson",
    macronutrients: {
      energy: 110.0,
      fat: 3.5,
      carbohydrate: 18.0,
      protein: 3.0,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: 4.5,
      sodium: 160.0,
      water: 78.0,
      vitaminA: 200,
      vitaminB6: 0.14,
      vitaminB12: 0.0,
      vitaminC: 25.0,
      vitaminD: 0.0,
      vitaminE: 1.0,
      vitaminK: 100,
      starch: 10.0,
      lactose: 0.0,
      alcohol: 0,
      caffeine: 0,
      sugars: 5.0,
      calcium: 50.0,
      iron: 1.0,
      magnesium: 35.0,
      phosphorus: 50.0,
      potassium: 450.0,
      zinc: 0.4,
      copper: 0.12,
      fluoride: 0,
      manganese: 0.3,
      selenium: 0,
      thiamin: 0.07,
      riboflavin: 0.06,
      niacin: 0.8,
      pantothenicAcid: 0.2,
      folateTotal: 40.0,
      folicAcid: 0,
      fattyAcidsTotalTrans: 0.0,
      fattyAcidsTotalSaturated: 0.5,
      fattyAcidsTotalMonounsaturated: 1.5,
      fattyAcidsTotalPolyunsaturated: 1.0,
      chloride: 280.0,
    },
  },
  {
    id: 8,
    coverSrc: "https://example.com/oatmeal-berries.jpg",
    name: "Oatmeal with Berries and Nuts",
    description:
      "A wholesome oatmeal breakfast topped with fresh berries and crunchy nuts.",
    author: "Mark Wilson",
    totalTime: "00:15",
    preparationTime: "00:10",
    finalWeight: "400 grams",
    portions: 2,
    ingredients: ["oats", "berries", "nuts"],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Cook the oats in water or milk until soft. Top with berries and nuts.",
      },
    ],
    category: [
      { id: 1, name: "vegetarian" },
      { id: 2, name: "breakfast" },
    ],
    quantity: 100,
    favorite: 1,
    source: "USDA",
    macronutrients: {
      energy: 170.0,
      fat: 5.0,
      carbohydrate: 27.0,
      protein: 6.0,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: 4.0,
      sodium: 50.0,
      water: 60.0,
      vitaminA: 0,
      vitaminB6: 0.05,
      vitaminB12: 0.0,
      vitaminC: 10.0,
      vitaminD: 0.0,
      vitaminE: 0.5,
      vitaminK: 2,
      starch: 15.0,
      lactose: 0.0,
      alcohol: 0,
      caffeine: 0,
      sugars: 8.0,
      calcium: 30.0,
      iron: 1.8,
      magnesium: 50.0,
      phosphorus: 130.0,
      potassium: 200.0,
      zinc: 1.0,
      copper: 0.2,
      fluoride: 0,
      manganese: 0.7,
      selenium: 5,
      thiamin: 0.1,
      riboflavin: 0.03,
      niacin: 0.5,
      pantothenicAcid: 0.2,
      folateTotal: 20.0,
      folicAcid: 0,
      fattyAcidsTotalTrans: 0.0,
      fattyAcidsTotalSaturated: 1.0,
      fattyAcidsTotalMonounsaturated: 2.0,
      fattyAcidsTotalPolyunsaturated: 1.5,
      chloride: 100.0,
    },
  },
];

let currentRecipes = [...favorites_recip];
let currentPage = 1;
const recipesPerPage = 4; // Số công thức mỗi trang
const maxVisiblePages = 5; // Số lượng nút số trang tối đa hiển thị (trước khi hiển thị "...")

// Hàm hiển thị công thức với phân trang
function displayRecipes(recipes, page = 1) {
  let recip_child = document.getElementsByClassName("recip_child")[0];
  recip_child.innerHTML = ""; // Xóa nội dung hiện tại

  // Tính toán chỉ số bắt đầu và kết thúc của công thức trên trang hiện tại
  const startIndex = (page - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const paginatedRecipes = recipes.slice(startIndex, endIndex);
  // Hiển thị công thức trên trang hiện tại
  paginatedRecipes.forEach((i) => {
    let newfav = `
        <div class="child">
          <div class="icon_child">
            <img src="../assets/icons/icon-community.png" alt="icon" />
            <p class="community">Community Recipes</p>
          </div>
          <div class="content_child">
            <p>${i.name}</p>
            <span class="name_recip">${i.author}</span>
            <div class="heart">
              <span>
                <img src="../assets/icons/heart-icon.png" alt="heart" />
                ${i.favorite}
              </span>
            </div>
            <div class="icon_content">
              <img src="../assets/icons/Vector-icon.png" alt="icon" />
              <span>${i.category.map((cat) => cat.name).join(", ")}</span>
            </div>
            <div class="specifications">
              <table>
                <tr>
                  <th>by</th>
                  <th>Energy</th>
                  <th>Fat</th>
                  <th>Carbohydrate</th>
                  <th>Protein</th>
                </tr>
                <tr>
                  <td>100g</td>
                  <td>${i.macronutrients.energy} kcal</td>
                  <td>${i.macronutrients.fat} g</td>
                  <td>${i.macronutrients.carbohydrate} g</td>
                  <td>${i.macronutrients.protein} g</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      `;
    recip_child.innerHTML += newfav;
  });

  // Cập nhật phân trang
  updatePagination(recipes, page);
}

// Hàm cập nhật phân trang với các nút số trang
function updatePagination(recipes, page) {
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  const pageNumbersContainer = document.getElementById("pageNumbers");
  const prevButton = document.querySelector(".prev-page");
  const nextButton = document.querySelector(".next-page");

  // Vô hiệu hóa nút Previous nếu đang ở trang đầu
  prevButton.disabled = page === 1;

  // Vô hiệu hóa nút Next nếu đang ở trang cuối
  nextButton.disabled = page === totalPages;

  // Xóa các nút số trang hiện tại
  pageNumbersContainer.innerHTML = "";

  // Tính toán các trang cần hiển thị
  let startPage, endPage;
  if (totalPages <= maxVisiblePages) {
    // Nếu tổng số trang ít hơn hoặc bằng số trang tối đa hiển thị
    startPage = 1;
    endPage = totalPages;
  } else {
    // Nếu tổng số trang nhiều hơn số trang tối đa hiển thị
    const halfMaxVisible = Math.floor(maxVisiblePages / 2);
    if (page <= halfMaxVisible) {
      // Gần đầu danh sách
      startPage = 1;
      endPage = maxVisiblePages - 1;
    } else if (page + halfMaxVisible >= totalPages) {
      // Gần cuối danh sách
      startPage = totalPages - maxVisiblePages + 2;
      endPage = totalPages;
    } else {
      // Ở giữa danh sách
      startPage = page - halfMaxVisible;
      endPage = page + halfMaxVisible;
    }
  }

  // Thêm nút "..." ở đầu nếu cần
  if (startPage > 1) {
    const firstPageButton = document.createElement("button");
    firstPageButton.textContent = "1";
    firstPageButton.addEventListener("click", () => {
      currentPage = 1;
      displayRecipes(recipes, currentPage);
    });
    pageNumbersContainer.appendChild(firstPageButton);

    if (startPage > 2) {
      const dots = document.createElement("button");
      dots.textContent = "...";
      dots.disabled = true;
      pageNumbersContainer.appendChild(dots);
    }
  }

  // Thêm các nút số trang
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    if (i === page) {
      pageButton.classList.add("active");
    }
    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayRecipes(recipes, currentPage);
    });
    pageNumbersContainer.appendChild(pageButton);
  }

  // Thêm nút "..." ở cuối nếu cần
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const dots = document.createElement("button");
      dots.textContent = "...";
      dots.disabled = true;
      pageNumbersContainer.appendChild(dots);
    }

    const lastPageButton = document.createElement("button");
    lastPageButton.textContent = totalPages;
    lastPageButton.addEventListener("click", () => {
      currentPage = totalPages;
      displayRecipes(recipes, currentPage);
    });
    pageNumbersContainer.appendChild(lastPageButton);
  }
}

// Hiển thị danh sách ban đầu
displayRecipes(currentRecipes, currentPage);
saveLocalStage(favorites_recip);
// Xử lý sự kiện cho nút Previous và Next
document.querySelector(".prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayRecipes(currentRecipes, currentPage);
  }
});

document.querySelector(".next-page").addEventListener("click", () => {
  const totalPages = Math.ceil(currentRecipes.length / recipesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayRecipes(currentRecipes, currentPage);
  }
});

// Tính năng tìm kiếm recipe theo tên
const searchInput = document.querySelector(".search_food");
searchInput.addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  currentRecipes = favorites_recip.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm)
  );
  currentPage = 1; // Reset về trang đầu khi tìm kiếm
  displayRecipes(currentRecipes, currentPage);
});

// Tính năng sắp xếp recipe theo nutrient (sử dụng select thay vì input)
const sortSelect = document.getElementById("sort-nutrient");
sortSelect.addEventListener("change", function (e) {
  const nutrient = e.target.value.toLowerCase();
  currentRecipes = [...favorites_recip];

  if (nutrient === "energy") {
    currentRecipes.sort(
      (a, b) => b.macronutrients.energy - a.macronutrients.energy
    );
  } else if (nutrient === "fat") {
    currentRecipes.sort((a, b) => b.macronutrients.fat - a.macronutrients.fat);
  } else if (nutrient === "carbohydrate") {
    currentRecipes.sort(
      (a, b) => b.macronutrients.carbohydrate - a.macronutrients.carbohydrate
    );
  } else if (nutrient === "protein") {
    currentRecipes.sort(
      (a, b) => b.macronutrients.protein - a.macronutrients.protein
    );
  }

  currentPage = 1; // Reset về trang đầu khi sắp xếp
  displayRecipes(currentRecipes, currentPage);
});

// Tính năng lọc recipe theo category (sử dụng select thay vì input)
const categorySelect = document.getElementById("category");
categorySelect.addEventListener("change", function (e) {
  const category = e.target.value.toLowerCase().trim();

  if (category === "") {
    // Nếu không có giá trị lọc, hiển thị lại toàn bộ công thức yêu thích
    currentRecipes = [...favorites_recip];
  } else {
    // Lọc theo danh mục, kiểm tra nếu category là chuỗi trước khi gọi .toLowerCase()
    currentRecipes = favorites_recip.filter((recipe) => {
      if (typeof recipe.category === "string") {
        return recipe.category.toLowerCase().includes(category);
      }
      return false; // Nếu category không phải chuỗi, không lọc công thức đó
    });
  }
  currentPage = 1; // Reset trang hiện tại về 1 khi lọc
  displayRecipes(currentRecipes, currentPage);
  saveLocalStage(currentRecipes); // Lưu lại dữ liệu lọc vào localStorage
});

// Hàm lưu lại danh sách công thức yêu thích vào localStorage
function saveLocalStage(favorites_recip) {
  localStorage.setItem("favorites", JSON.stringify(favorites_recip));
}
