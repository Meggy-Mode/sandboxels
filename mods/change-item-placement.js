document.addEventListener("DOMContentLoaded", function () {
    // Select the category container
    let categoryContainer = document.querySelector("#categoryContainer"); // Replace with actual container ID

    // Get all category buttons/elements
    let categories = Array.from(categoryContainer.children); 

    // Reorder categories (example: reversing them)
    categories.sort((a, b) => a.textContent.localeCompare(b.textContent)); // Sort alphabetically

    // Clear existing categories and append in new order
    categoryContainer.innerHTML = ""; 
    categories.forEach(category => categoryContainer.appendChild(category));
});
