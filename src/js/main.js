// alert('Kod JS podpięty prawidłowo')
// ===================================================================

// let rellax = new Rellax(".rellax");
// ===================================================================

const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".burger-btn");
const navItems = document.querySelectorAll(".nav__item");

const handleNav = () => {
  nav.classList.toggle("nav--active");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
    });
  });
};

burgerBtn.addEventListener("click", handleNav);

// ==========================================================

function showAlert(message, duration) {
  const alertBox = document.createElement("div");
  alertBox.classList.add("alert");
  alertBox.textContent = message;
  document.body.appendChild(alertBox);
  setTimeout(function () {
    alertBox.remove();
  }, duration);
}

function copyToClipboard(elementId) {
  const copyText = document.getElementById(elementId).textContent;
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      // confirm('Tekst został skopiowany do schowka.')
      showAlert("Kod produktu skopiowany do schowka!", 1500);
    })
    .catch((err) => {
      console.error("Wystąpił błąd podczas kopiowania do schowka: ", err);
    });
}


