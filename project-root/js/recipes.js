// Dữ liệu mặc định cho recipes
let defaultRecipes = [
  {
    id: 1,
    coverSrc:
      "https://media.istockphoto.com/id/1433432507/vi/anh/%C4%83n-u%E1%BB%91ng-l%C3%A0nh-m%E1%BA%A1nh-%C4%91%C4%A9a-v%E1%BB%9Bi-th%E1%BB%B1c-ph%E1%BA%A9m-thu%E1%BA%A7n-chay-ho%E1%BA%B7c-chay-trong-tay-ph%E1%BB%A5-n%E1%BB%AF-ch%E1%BA%BF-%C4%91%E1%BB%99-%C4%83n-u%E1%BB%91ng-d%E1%BB%B1a.jpg?s=612x612&w=0&k=20&c=Z0BVb_z-mLjup_3f4Kvto5q0A0z8CqBjsHS7DSMaQ1k=",
    name: "Turmeric Roasted Cauliflower Salad (lowfodmap)",
    description:
      "Our roasted cauliflower salad with turmeric is low in calories and packed with punchy flavor.",
    author: "Joana Jardim",
    totalTime: "00:40",
    preparationTime: "00:40",
    finalWeight: "978.8 grams",
    portions: 4,
    favorite: 49,

    ingredients: [3],
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
    macronutrients: {
      energy: 143,
      fat: 6,
      carbohydrate: 18,
      protein: 5,
    },
  },
  {
    id: 2,
    coverSrc:
      "https://www.shutterstock.com/image-photo/combination-main-courses-on-table-260nw-2446033081.jpg",
    name: "Grilled Chicken Salad",
    description:
      "A healthy grilled chicken salad with fresh greens and a light dressing.",
    author: "John Doe",
    totalTime: "00:30",
    preparationTime: "00:20",
    finalWeight: "600 grams",
    portions: 2,
    favorite: 49,

    ingredients: [5],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Preheat the grill to medium-high heat. Season the chicken with salt and pepper.",
      },
    ],
    category: [
      { id: 3, name: "main course" },
      { id: 4, name: "low-carb" },
    ],
    macronutrients: {
      energy: 250,
      fat: 10,
      carbohydrate: 5,
      protein: 30,
    },
  },
  {
    id: 3,
    coverSrc:
      "https://media.istockphoto.com/id/1433432507/vi/anh/%C4%83n-u%E1%BB%91ng-l%C3%A0nh-m%E1%BA%A1nh-%C4%91%C4%A9a-v%E1%BB%9Bi-th%E1%BB%B1c-ph%E1%BA%A9m-thu%E1%BA%A7n-chay-ho%E1%BA%B7c-chay-trong-tay-ph%E1%BB%A5-n%E1%BB%AF-ch%E1%BA%BF-%C4%91%E1%BB%99-%C4%83n-u%E1%BB%91ng-d%E1%BB%B1a.jpg?s=612x612&w=0&k=20&c=Z0BVb_z-mLjup_3f4Kvto5q0A0z8CqBjsHS7DSMaQ1k=",
    name: "Vegan Pasta Primavera",
    description: "A colorful vegan pasta dish with seasonal vegetables.",
    author: "Alice Smith",
    totalTime: "00:35",
    preparationTime: "00:15",
    finalWeight: "800 grams",
    portions: 4,
    favorite: 49,

    ingredients: [2, 3],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Cook the pasta according to package instructions. Sauté the vegetables in olive oil.",
      },
    ],
    category: [
      { id: 1, name: "vegetarian" },
      { id: 5, name: "vegan" },
    ],
    macronutrients: {
      energy: 200,
      fat: 8,
      carbohydrate: 35,
      protein: 7,
    },
  },
  {
    id: 4,
    coverSrc:
      "https://www.shutterstock.com/image-photo/combination-main-courses-on-table-260nw-2446033081.jpg",
    name: "Beef Stir-Fry",
    description: "A quick and flavorful beef stir-fry with mixed vegetables.",
    author: "Bob Johnson",
    totalTime: "00:25",
    preparationTime: "00:10",
    finalWeight: "700 grams",
    portions: 3,
    favorite: 49,

    ingredients: [3],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Heat a wok over high heat. Add oil and stir-fry the beef until browned.",
      },
    ],
    category: [
      { id: 3, name: "main course" },
      { id: 6, name: "asian" },
    ],
    macronutrients: {
      energy: 300,
      fat: 15,
      carbohydrate: 10,
      protein: 25,
    },
  },
  {
    id: 5,
    coverSrc: "https://img.lovepik.com/photo/60162/4704.jpg_wh860.jpg",
    name: "Fruit Smoothie Bowl",
    description:
      "A refreshing smoothie bowl topped with fresh fruits and nuts.",
    author: "Emma Wilson",
    totalTime: "00:15",
    preparationTime: "00:10",
    finalWeight: "400 grams",
    portions: 2,
    favorite: 49,

    ingredients: [4],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Blend the fruits with yogurt until smooth. Top with nuts and seeds.",
      },
    ],
    category: [
      { id: 7, name: "breakfast" },
      { id: 1, name: "vegetarian" },
    ],
    macronutrients: {
      energy: 180,
      fat: 5,
      carbohydrate: 30,
      protein: 4,
    },
  },
];

// Hàm lưu dữ liệu vào localStorage
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Hàm lấy dữ liệu từ localStorage
const loadFromLocalStorage = (key, defaultData) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : defaultData;
};

// Khởi tạo biến
let add = document.querySelector(".add_recipe");
let fav = document.querySelector(".count-favorites");
let home = document.querySelector(".btn_favorites");
let cannedFoods = loadFromLocalStorage("cannedFoods", []);
let recipes = loadFromLocalStorage("recipes", defaultRecipes);
let currentRecipes = [...recipes];
let currentRecipePage = 1;
const ITEMS_PER_PAGE = 4;
const MAX_VISIBLE_PAGES = 5;

// Cập nhật số lượng favorites
if (fav) {
  fav.textContent = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ).length;
}

// Xử lý nút Home
if (home) {
  home.addEventListener("click", () => {
    window.location.href = "../page/homepage.html";
  });
}

// Hàm hiển thị danh sách recipes
const showRecipes = (recipesList, page = 1) => {
  const recipeContainer = document.querySelector(".recip_child");
  if (!recipeContainer) {
    console.error("Không tìm thấy .recip_child");
    return;
  }

  recipeContainer.innerHTML = "";

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const recipesToShow = recipesList.slice(startIndex, endIndex);

  recipesToShow.forEach((recipe) => {
    // Kiểm tra nếu category là mảng thì mới map
    let categories = "";
    if (Array.isArray(recipe.category)) {
      categories = recipe.category.map((cat) => cat.name).join(", ");
    } else if (typeof recipe.category === "string") {
      categories = recipe.category; // nếu là string thì giữ nguyên
    } else {
      categories = "Unknown";
    }

    const recipeHTML = `
      <div class="child" data-id="${recipe.id}">
        <div class="icon_child">
          <img src="../assets/icons/icon-community.png" alt="icon" />
          <p class="community">Community Recipes</p>
        </div>
        <div class="content_child">
          <div class="title_content">
            <p>${recipe.name}</p>
            <div class="heart">
              <span>
                <img src="../assets/icons/heart-icon.png" alt="heart" />
                37
              </span>
            </div>
          </div>
          <span class="name_recip">${recipe.author}</span>
          <div class="icon_content">
            <img src="../assets/icons/Vector-icon.png" alt="icon" />
            <span>${categories}</span>
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
                <td>${recipe.macronutrients?.energy ?? "0"} kcal</td>
                <td>${recipe.macronutrients?.fat ?? "0"} g</td>
                <td>${recipe.macronutrients?.carbohydrate ?? "0"} g</td>
                <td>${recipe.macronutrients?.protein ?? "0"} g</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    `;
    recipeContainer.innerHTML += recipeHTML;
  });

  const recipeItems = document.querySelectorAll(".child");
  recipeItems.forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
      window.location.href = `../page/recipe_detail.html?id=${id}`;
    });
  });

  updatePageButtons(recipesList, page, "recipe");
  saveToLocalStorage("recipes", recipes);
};

// Hàm tạo nút phân trang
const updatePageButtons = (items, page, type) => {
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const pageList = document.querySelector(".list_page");
  if (!pageList) {
    console.error("Không tìm thấy .list_page");
    return;
  }

  const oldPageNumbers = pageList.querySelector("#pageNumbers");
  if (oldPageNumbers) oldPageNumbers.remove();

  const pageNumbers = document.createElement("div");
  pageNumbers.id = "pageNumbers";
  pageList.insertBefore(
    pageNumbers,
    pageList.querySelector("button:last-child")
  );

  const prevButton = pageList.querySelector("button:first-child");
  const nextButton = pageList.querySelector("button:last-child");
  if (prevButton) prevButton.disabled = page === 1;
  if (nextButton) nextButton.disabled = page === totalPages;

  let startPage = 1;
  let endPage = totalPages;
  const halfVisible = Math.floor(MAX_VISIBLE_PAGES / 2);

  if (totalPages > MAX_VISIBLE_PAGES) {
    if (page <= halfVisible) {
      endPage = MAX_VISIBLE_PAGES - 1;
    } else if (page + halfVisible >= totalPages) {
      startPage = totalPages - MAX_VISIBLE_PAGES + 2;
      endPage = totalPages;
    } else {
      startPage = page - halfVisible;
      endPage = page + halfVisible;
    }
  }

  if (startPage > 1) {
    pageNumbers.appendChild(createPageButton(1, type));
    if (startPage > 2) pageNumbers.appendChild(createDotsButton());
  }

  for (let i = startPage; i <= endPage; i++) {
    const button = createPageButton(i, type);
    if (i === page) button.classList.add("active");
    pageNumbers.appendChild(button);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pageNumbers.appendChild(createDotsButton());
    pageNumbers.appendChild(createPageButton(totalPages, type));
  }
};

// Hàm tạo nút số trang
const createPageButton = (pageNum, type) => {
  const button = document.createElement("button");
  button.textContent = pageNum;
  button.addEventListener("click", () => {
    if (type === "recipe") {
      currentRecipePage = pageNum;
      showRecipes(currentRecipes, currentRecipePage);
    }
  });
  return button;
};

// Hàm tạo nút "..."
const createDotsButton = () => {
  const button = document.createElement("button");
  button.textContent = "...";
  button.disabled = true;
  return button;
};

// Hàm lấy danh sách các category duy nhất từ recipes
const getUniqueCategories = (recipes) => {
  const categorySet = new Set();

  recipes.forEach((recipe) => {
    // Kiểm tra nếu category là mảng, nếu không, chuyển nó thành mảng
    if (Array.isArray(recipe.category)) {
      recipe.category.forEach((cat) => {
        if (cat && cat.name) {
          categorySet.add(cat.name);
        }
      });
    } else if (typeof recipe.category === "string") {
      categorySet.add(recipe.category);
    }
  });

  return Array.from(categorySet);
};

// Hàm khởi tạo options cho select category
const populateCategorySelect = () => {
  const categorySelect = document.querySelector(".category_select");
  if (!categorySelect) {
    console.error("Không tìm thấy .category_select");
    return;
  }

  const uniqueCategories = getUniqueCategories(recipes);
  categorySelect.innerHTML = `<option value="" selected>Category</option>`;
  uniqueCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.toLowerCase();
    option.textContent = category;
    categorySelect.appendChild(option);
  });
};

// Hiển thị danh sách ban đầu và khởi tạo category select
showRecipes(currentRecipes, currentRecipePage);
populateCategorySelect();

// Xử lý nút Previous
const prevButton = document.querySelector(".list_page .previous_page");
if (prevButton) {
  prevButton.addEventListener("click", () => {
    if (currentRecipePage > 1) {
      currentRecipePage--;
      showRecipes(currentRecipes, currentRecipePage);
    }
  });
}

// Xử lý nút Next
const nextButton = document.querySelector(".list_page .next-page");
if (nextButton) {
  nextButton.addEventListener("click", () => {
    const totalPages = Math.ceil(currentRecipes.length / ITEMS_PER_PAGE);
    if (currentRecipePage < totalPages) {
      currentRecipePage++;
      showRecipes(currentRecipes, currentRecipePage);
    }
  });
}

// Tìm kiếm recipes theo tên
const searchInput = document.querySelector(".search_food");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    currentRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm)
    );
    currentRecipePage = 1;
    showRecipes(currentRecipes, currentRecipePage);
  });
}

// Sắp xếp recipes theo chất dinh dưỡng
const nutrientSelect = document.querySelector(".nutrient_select");
if (nutrientSelect) {
  nutrientSelect.addEventListener("change", (e) => {
    const nutrient = e.target.value.toLowerCase();
    const sortByNutrient = (a, b) => {
      const nutrients = {
        energy: "energy",
        fat: "fat",
        carbohydrate: "carbohydrate",
        protein: "protein",
      };
      const key = nutrients[nutrient];
      if (key) return b.macronutrients[key] - a.macronutrients[key];
      return 0;
    };

    currentRecipes = [...recipes];
    if (nutrient) {
      currentRecipes.sort(sortByNutrient);
    }
    currentRecipePage = 1;
    showRecipes(currentRecipes, currentRecipePage);
  });
}

// Lọc recipes theo danh mục
const categorySelect = document.querySelector(".category_select");
if (categorySelect) {
  categorySelect.addEventListener("change", (e) => {
    const category = e.target.value.toLowerCase();
    if (category) {
      currentRecipes = recipes.filter((recipe) =>
        recipe.category.some((cat) => cat.name.toLowerCase() === category)
      );
    } else {
      currentRecipes = [...recipes];
    }
    currentRecipePage = 1;
    showRecipes(currentRecipes, currentRecipePage);
  });
}

// Xử lý nút thêm recipe
if (add) {
  add.addEventListener("click", () => {
    window.location.href = "../page/recipe-add.html";
  });
}
