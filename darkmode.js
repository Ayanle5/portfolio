// Function to toggle Dark Mode
function toggledarkmode() {
    var element = document.body;
    
    // Toggle dark mode on body
    element.classList.toggle("dark-mode-active");
    
    // Save the dark mode state in localStorage
    if (element.classList.contains("dark-mode-active")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
}

// Check if dark mode was previously enabled in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    // Apply dark mode on page load
    document.body.classList.add("dark-mode-active");
    // Optional: Change button appearance if needed
    document.getElementById("dark-button").classList.add("dark-button-active");
}

// Add event listener for the dark mode button click event
document.getElementById("dark-button").addEventListener("click", function() {
    toggledarkmode();  // Call the toggledarkmode function when the button is clicked
});
