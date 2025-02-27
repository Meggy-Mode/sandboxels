document.addEventListener("DOMContentLoaded", function () {
    // Select the category container
    let categoryContainer = document.querySelector("#categoryContainer"); // Update with actual ID

    // Apply new styles to move categories to the side
    categoryContainer.style.display = "flex";
    categoryContainer.style.flexDirection = "column"; // Stack vertically
    categoryContainer.style.position = "absolute"; 
    categoryContainer.style.left = "10px"; // Adjust for left-side positioning
    categoryContainer.style.top = "50px"; // Adjust starting position
    categoryContainer.style.zIndex = "1000"; // Ensure visibility

    // Modify each category button
    let categories = categoryContainer.children;
    for (let category of categories) {
        category.style.width = "120px"; // Adjust size
        category.style.marginBottom = "5px"; // Add spacing
    }
});
