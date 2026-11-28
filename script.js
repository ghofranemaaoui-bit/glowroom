
// Glowroom ✨

document.addEventListener("DOMContentLoaded", () => {

    console.log("Welcome to Glowroom!");

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        section.addEventListener("click", () => {
            section.classList.toggle("active");
        });
    });

});
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      const y = targetEl.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
});
