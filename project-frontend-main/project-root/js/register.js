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
  newToast.timeOut = setTimeout(() => newToast.remove(), 3000);
}

document
  .getElementById("form-register")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const chuHoa = /^(?=.*[A-Z])/;
    const chuSo = /^(?=.*\d)/;
    const kyTu = /^(?=.*[!@#$%^&*])/;
    let errors = [];
    if (!email) errors.push("Email không được bỏ trống");
    if (!username) errors.push("Tên đăng nhập không được bỏ trống");
    if (!password) {
      errors.push("Mật khẩu không được bỏ trống");
    } else if (password.length < 8) {
      errors.push("Mật khẩu phải có ít nhất 8 ký tự");
    }

    if (!chuHoa.test(password)) {
      errors.push("Mật khẩu có ít nhất 1 chữ hoa");
    }
    if (!chuSo.test(password)) {
      errors.push("Mật khẩu có ít nhất 1 chữ số");
    }
    if (!kyTu.test(password)) {
      errors.push("Mật khẩu có ít nhất 1 ký tự đặc biệt");
    }

    if (errors.length > 0) {
      createToast(
        "error",
        "../assets/icons/error-login.png",
        "Lỗi đăng ký",
        errors.join("<br>")
      );
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some((user) => user.email === email);
    const usernameExists = users.some((user) => user.username === username);

    if (emailExists || usernameExists) {
      let msg = emailExists
        ? "Email đã được sử dụng"
        : "Tên đăng nhập đã tồn tại";
      createToast(
        "error",
        "../assets/icons/error-login.png",
        "Lỗi đăng ký",
        msg
      );
      return;
    }

    const newUser = { email, username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    createToast(
      "success",
      "../assets/icons/pass-login.png",
      "Đăng ký thành công",
      "Tài khoản đã được tạo!"
    );

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 2000);
  });
