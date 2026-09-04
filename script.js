const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Replace every placeholder affiliate URL with your real tracking link.
const affiliateUrl = "https://refpa94452.com/L?tag=d_5938282m_98818c_&site=5938282&ad=98818";
document.querySelectorAll('a[href="https://refpa94452.com/L?tag=d_5938282m_98818c_&site=5938282&ad=98818"]').forEach(link => {
  link.href = affiliateUrl;
});
