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
const affiliateUrl = "YOUR_AFFILIATE_LINK";
document.querySelectorAll('a[href="YOUR_AFFILIATE_LINK"]').forEach(link => {
  link.href = affiliateUrl;
});
