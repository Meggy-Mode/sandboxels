document.addEventListener("DOMContentLoaded", function () {
    // Select category container (update this if needed)
    let categoryContainer = document.querySelector("#categoryControls"); 

    // Apply styles to move categories to the side
    categoryContainer.style.display = "flex";
    categoryContainer.style.flexDirection = "column"; // Stack categories vertically
    categoryContainer.style.position = "absolute"; 
    categoryContainer.style.left = "10px"; // Moves to the left side
    categoryContainer.style.top = "50px"; // Adjusts vertical position
    categoryContainer.style.zIndex = "1000"; // Ensures it stays on top
    categoryContainer.style.background = "rgba(0, 0, 0, 0.8)"; // Dark background for visibility
    categoryContainer.style.padding = "10px"; 
    categoryContainer.style.borderRadius = "8px";

    // Adjust individual category buttons (if they are buttons)
    let categories = categoryContainer.children;
    for (let category of categories) {
        category.style.width = "150px"; // Adjust width
        category.style.marginBottom = "5px"; // Add spacing
        category.style.textAlign = "left"; // Align text properly
    }
});
