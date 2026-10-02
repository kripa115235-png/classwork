document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
    const courseDetails = document.getElementById("courseDetails");
    const searchGrid = document.getElementById("searchGrid");
    const searchStatus = document.getElementById("searchStatus");
    const nameInput = document.getElementById("nameInput");
    const charCount = document.getElementById("charCount");
    const trimCount = document.getElementById("trimCount");

    const cards = searchGrid.querySelectorAll(".card");

    // Show and hide course details
    toggleDetailsBtn.addEventListener("click", function () {
        courseDetails.classList.toggle("hidden");

        const isHidden = courseDetails.classList.contains("hidden");

        toggleDetailsBtn.textContent = isHidden
            ? "Show Details"
            : "Hide Details";

        toggleDetailsBtn.setAttribute(
            "aria-expanded",
            String(!isHidden)
        );
    });

    // Search courses
    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            searchInput.value = "";

            cards.forEach(function (card) {
                card.style.display = "";
            });

            searchStatus.textContent = "";
            return;
        }

        if (event.key === "Enter") {
            event.preventDefault();
            searchStatus.textContent = "Searching...";
            return;
        }
    });

    searchInput.addEventListener("keyup", function (event) {

        if (
            event.key === "Shift" ||
            event.key === "Control" ||
            event.key === "Alt" ||
            event.key === "Enter" ||
            event.key === "Escape"
        ) {
            return;
        }

        const query = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(function (card) {

            const name = card.dataset.name.toLowerCase();
            const tags = card.dataset.tags.toLowerCase();

            if (
                query === "" ||
                name.includes(query) ||
                tags.includes(query)
            ) {
                card.style.display = "";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (query === "") {
            searchStatus.textContent = "";
        } else {
            searchStatus.textContent =
                visibleCount + " results for " + query;
        }
    });

    // Count characters in the name input
    nameInput.addEventListener("input", function () {

        const rawValue = nameInput.value;
        const trimmedValue = rawValue.trim();

        charCount.textContent = rawValue.length;
        trimCount.textContent = trimmedValue.length;

        if (rawValue.length > 0 && trimmedValue.length === 0) {
            charCount.style.color = "red";
        } else {
            charCount.style.color = "blue";
        }
    });

});
