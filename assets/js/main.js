document.addEventListener("DOMContentLoaded", () => {
  // PASSWORD TOGGLE
  const passwordFormElems = document.querySelectorAll(".password-form-elem");

  passwordFormElems.forEach(function (passwordFormElem) {
    const button = passwordFormElem.querySelector(".form-elem-icon");

    if (button) {
      button.addEventListener("click", function () {
        const input = passwordFormElem.querySelector("input");

        if (input && input.type === "password") {
          input.type = "text";
          button.classList.add("show-password");
        } else if (input) {
          input.type = "password";
          button.classList.remove("show-password");
        }
      });
    }
  });

  // SIDEBAR CLOSE
  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  const sidebarOpenBtn = document.getElementById("sidebar-open-btn");
  const adminSidebar = document.querySelector(".admin-sidebar");
  const adminSidebarOverlay = document.querySelector(".admin-sidebar-overlay");

  sidebarOpenBtn.addEventListener("click", () => {
    sidebarOpenBtn.classList.add("is-open");
    adminSidebar.classList.add("show-sidebar");
    adminSidebarOverlay.classList.add("show-sidebar-overlay");
  });

  sidebarCloseBtn.addEventListener("click", () => {
    sidebarOpenBtn.classList.remove("is-open");
    adminSidebar.classList.remove("show-sidebar");
    adminSidebarOverlay.classList.remove("show-sidebar-overlay");
  });

  adminSidebarOverlay.addEventListener("click", () => {
    adminSidebarOverlay.classList.remove("show-sidebar-overlay");
    sidebarOpenBtn.classList.remove("is-open");
    adminSidebar.classList.remove("show-sidebar");
  });
});
