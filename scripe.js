

// Welcome message in browser console
console.log("Welcome to The Urban Bistro!");

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links a");

// Close mobile menu after clicking a link
navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation link clicked:", link.textContent);

    });

});
