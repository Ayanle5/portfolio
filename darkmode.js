function toggledarkmode() {
    const element = document.body;

    // Add transition effect
    element.classList.add("transition-on");

    // Toggle dark mode
    element.classList.toggle("dark-mode-active");

    // Store state
    if (element.classList.contains("dark-mode-active")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }

    // Remove transition class after animation ends
    setTimeout(() => {
        element.classList.remove("transition-on");
    }, 1800);
}

// On page load, apply dark mode instantly if saved
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode-active");
    }

    // Button click event
    document.getElementById("dark-button").addEventListener("click", toggledarkmode);
});
