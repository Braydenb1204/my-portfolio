const detailsButton = document.getElementById("showDetails");
detailsButton.addEventListener("click", getDetails);

let details = document.getElementById("details");

function getDetails() {
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        this.textContent = "Hide Details";
    } else {
        details.style.display = "none";
        this.textContent = "Show Details"
    }
};

const toggleThemeButton = document.getElementById('ToggleTheme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});