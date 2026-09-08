const TRACKING_LINK =
  "https://refpa94452.com/L?tag=d_5938282m_98818c_&site=5938282&ad=98818";

document.querySelectorAll("[data-track]").forEach((link) => {
  link.href = TRACKING_LINK;
});

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

const cookie = document.getElementById("cookie");
const cookieClose = document.getElementById("cookieClose");

try {
  if (localStorage.getItem("betongame_cookie_closed") === "1") {
    cookie.style.display = "none";
  }
} catch (e) {}

cookieClose.addEventListener("click", () => {
  cookie.style.display = "none";
  try {
    localStorage.setItem("betongame_cookie_closed", "1");
  } catch (e) {}
});

