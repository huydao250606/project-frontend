let btnMenu = document.getElementById("btn-menu");
let sidebar = document.getElementById("sidebar");
let check = 0;
btnMenu.onclick = (event) => {
  event.stopPropagation();
  if (check === 0) {
    sidebar.classList.add("show");
    btnMenu.classList.add("show");
    check = 1;
  } else {
    sidebar.classList.remove("show");
    btnMenu.classList.remove("show");
    check = 0;
  }
};
document.onclick = (event) => {
  if (!sidebar.contains(event.target) && event.target !== btnMenu) {
    sidebar.classList.remove("show");
    btnMenu.classList.remove("show");
  }
};

let namelogin = localStorage.getItem("name") || "";
document.getElementById("username").innerText = namelogin;
