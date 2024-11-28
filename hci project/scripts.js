document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const recipeItems = document.getElementById("recipeItems").getElementsByTagName("li");

    // Search functionality
    searchBar.addEventListener("keyup", function (e) {
        const term = e.target.value.toLowerCase();

        // Loop through each recipe and check if it matches the search term
        Array.from(recipeItems).forEach(recipe => {
            const name = recipe.textContent.toLowerCase();
            recipe.style.display = name.includes(term) ? "list-item" : "none";
        });
    });
});
