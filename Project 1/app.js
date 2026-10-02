document.addEventListener("DOMContentLoaded", function () {

    console.log("MIT Profile loaded");

    const welcomeMessage = document.getElementById("welcomeMessage");
    const studentName = document.getElementById("studentName");

    const today = new Date();
    const date = today.toLocaleDateString();

    welcomeMessage.textContent =
        "Welcome to MIT College! Today is " + date;

    studentName.addEventListener("click", function () {

        if (studentName.textContent === "Kripa Shrestha") {
            studentName.textContent = "Kripa";
        } else {
            studentName.textContent = "Kripa Shrestha";
        }

    });

});
