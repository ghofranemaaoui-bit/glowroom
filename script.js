
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
