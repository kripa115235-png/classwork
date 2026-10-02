document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");
    let total = 0;

    cards.forEach(function (card) {

        let count = 0;

        const button = card.querySelector(".countBtn");
        const courseName = card.dataset.course;

        button.addEventListener("click", function () {

            count++;
            total++;

            button.textContent = "Clicked " + count;
            document.getElementById("totalClicks").textContent =
                "Total: " + total;

            if (count % 2 === 0) {
                button.style.backgroundColor = "#dbeafe";
            } else {
                button.style.backgroundColor = "#bfdbfe";
            }
        });

        card.addEventListener("mouseenter", function () {
            console.log(courseName);
        });

        card.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                button.click();
            }

        });

    });

});
