document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    if (window.innerWidth <= 600) {
        mainNav.classList.add("hidden");
    }

    menuBtn.addEventListener("click", function () {

        mainNav.classList.toggle("hidden");

        const isHidden = mainNav.classList.contains("hidden");

        menuBtn.setAttribute("aria-expanded", String(!isHidden));

        if (isHidden) {
            menuBtn.textContent = "Menu";
        } else {
            menuBtn.textContent = "Close";
        }
    });

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            !mainNav.classList.contains("hidden") &&
            window.innerWidth <= 600
        ) {
            mainNav.classList.add("hidden");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.textContent = "Menu";
        }

    });

    window.addEventListener("resize", function () {

        if (window.innerWidth > 600) {
            mainNav.classList.remove("hidden");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.textContent = "Menu";
        }

    });

});
