// Example of a simple toggle for hiding/showing sections
document.querySelector(".toggle-button").addEventListener("click", function() {
    let content = document.querySelector(".about-intro");
    content.classList.toggle("hidden");
});
