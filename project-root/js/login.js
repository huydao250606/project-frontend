let notifications = document.querySelector(".notifications");

function createToast(type, iconUrl, title, text) {
  let newToast = document.createElement("div");
  newToast.classList.add("toast", type);
  newToast.innerHTML = `
    <img class="toast-icon" src="${iconUrl}" alt="icon" />
    <div class="content">
        <div class="title">${title}</div>
        <span>${text}</span>
    </div>
    <span class="close-btn" onclick="(this.parentElement).remove()">×</span>
  `;
  notifications.appendChild(newToast);
  newToast.timeOut = setTimeout(() => newToast.remove(), 1000);
}

document.getElementById("success").addEventListener("click", function () {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (email === "") {
    createToast(
      "error",
      "../assets/icons/error-login.png",
      "Lỗi",
      "Email không được bỏ trống."
    );
    return;
  }

  if (password === "") {
    createToast(
      "error",
      "../assets/icons/error-login.png",
      "Lỗi",
      "Mật khẩu không được bỏ trống."
    );
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    createToast(
      "success",
      "../assets/icons/pass-login.png",
      "Thành công",
      "Đăng nhập thành công!"
    );
    for (const i in users) {
      if (users[i].email === email) {
        let name = users[i].username;
        localStorage.setItem("name", name);
      }
    }
    setTimeout(() => {
      window.location.href = "page/homepage.html";
    }, 1000);
  } else {
    createToast(
      "error",
      "../assets/icons/error-login.png",
      "Lỗi",
      "Email hoặc mật khẩu không chính xác."
    );
  }
});
