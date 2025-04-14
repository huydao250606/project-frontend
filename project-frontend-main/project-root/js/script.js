// let macronutrients = food[index].macronutrients;

// Cập nhật phân tích tổng quát
// document.querySelector(".fat").style.borderColor = "#DB4965";
// document.querySelector(".analysis .energy p span").textContent =
//   macronutrients.energy;
// document.querySelector(
//   ".chart .nutrition:nth-child(1) .fat"
// ).textContent = `${macronutrients.fat}g`;
// document.querySelector(
//   ".chart .nutrition:nth-child(2) .carbohydrate"
// ).textContent = `${macronutrients.carbohydrate}g`;
// document.querySelector(".protein").style.borderColor = "#1AB394";
// document.querySelector(
//   ".chart .nutrition:nth-child(3) .protein"
// ).textContent = `${macronutrients.protein}g`;

// Tính toán tỷ lệ phần trăm cho biểu đồ tròn
// const total =
//   macronutrients.fat + macronutrients.carbohydrate + macronutrients.protein;

// const fat = (macronutrients.fat / total) * 100;
// const carb = (macronutrients.carbohydrate / total) * 100;
// const protein = (macronutrients.protein / total) * 100;

// // Cập nhật màu nền biểu đồ tròn
// let pie_chart = document.querySelector(".pie-chart");
// pie_chart.style.background = `conic-gradient(
//   #e64a64 0% ${fat}%,
//   #e8a878 ${fat}% ${fat + carb}%,
//   #17a589 ${fat + carb}% 100%
// )`;

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
// setLabelPosition(".fat-label", 0, fat);
// setLabelPosition(".carb-label", fat, carb);
// setLabelPosition(".protein-label", fat + carb, protein);

// Cập nhật vi chất dinh dưỡng
//   let micronutrients = food[index].micronutrients;
//   document.querySelector(
//     "tbody tr:nth-child(1)  td:nth-child(2)  span"
//   ).textContent = micronutrients.sodium;
//   document.querySelector(
//     "tbody  tr:nth-child(2)  td:nth-child(2)  span"
//   ).textContent = micronutrients.vitaminA;
//   document.querySelector(
//     "tbody tr:nth-child(3)  td:nth-child(2)  span"
//   ).textContent = micronutrients.vitaminB6;
//   document.querySelector(
//     "tbody tr:nth-child(4)  td:nth-child(2)  span"
//   ).textContent = micronutrients.vitaminB12;
//   document.querySelector(
//     "tbody tr:nth-child(5)  td:nth-child(2)  span"
//   ).textContent = micronutrients.vitaminC;
//   document.querySelector(
//     "tbody tr:nth-child(6)  td:nth-child(2)  span"
//   ).textContent = micronutrients.vitaminD;
//   document.querySelector(
//     "tbody tr:nth-child(7)  td:nth-child(2)  span"
//   ).textContent = micronutrients.vitaminE;
//   document.querySelector(
//     "tbody tr:nth-child(8)  td:nth-child(2)  span"
//   ).textContent = micronutrients.vitaminK;
//   document.querySelector(
//     "tbody tr:nth-child(9)  td:nth-child(2)  span"
//   ).textContent = micronutrients.sugars;
//   document.querySelector(
//     "tbody tr:nth-child(10)  td:nth-child(2)  span"
//   ).textContent = micronutrients.calcium;
//   document.querySelector(
//     "tbody tr:nth-child(11)  td:nth-child(2)  span"
//   ).textContent = micronutrients.iron;
//   document.querySelector(
//     "tbody tr:nth-child(12)  td:nth-child(2)  span"
//   ).textContent = micronutrients.magnesium;
//   document.querySelector(
//     "tbody tr:nth-child(13)  td:nth-child(2)  span"
//   ).textContent = micronutrients.phosphorus;
//   document.querySelector(
//     "tbody tr:nth-child(14)  td:nth-child(2)  span"
//   ).textContent = micronutrients.potassium;
//   document.querySelector(
//     "tbody tr:nth-child(15)  td:nth-child(2)  span"
//   ).textContent = micronutrients.zinc;
//   document.querySelector(
//     "tbody tr:nth-child(16)  td:nth-child(2)  span"
//   ).textContent = micronutrients.copper;
//   document.querySelector(
//     "tbody tr:nth-child(17)  td:nth-child(2)  span"
//   ).textContent = micronutrients.fluoride;
//   document.querySelector(
//     "tbody tr:nth-child(18)  td:nth-child(2)  span"
//   ).textContent = micronutrients.manganese;
//   document.querySelector(
//     "tbody tr:nth-child(19)  td:nth-child(2)  span"
//   ).textContent = micronutrients.selenium;
//   document.querySelector(
//     "tbody tr:nth-child(20)  td:nth-child(2)  span"
//   ).textContent = micronutrients.thiamin;
//   document.querySelector(
//     "tbody tr:nth-child(21)  td:nth-child(2)  span"
//   ).textContent = micronutrients.riboflavin;
//   document.querySelector(
//     "tbody tr:nth-child(22)  td:nth-child(2)  span"
//   ).textContent = micronutrients.niacin;
//   document.querySelector(
//     "tbody tr:nth-child(23)  td:nth-child(2)  span"
//   ).textContent = micronutrients.pantothenicAcid;
//   document.querySelector(
//     "tbody tr:nth-child(24)  td:nth-child(2)  span"
//   ).textContent = micronutrients.folateTotal;

//
