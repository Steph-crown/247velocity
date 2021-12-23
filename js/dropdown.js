const menuIcon = document.querySelector("div.menu-icon");
const closeIcon = document.querySelector("p.times");
const dropdown = document.querySelector("div.dropdown");

const dropdownContent = document.querySelector("div.dropdown-content");

menuIcon.addEventListener("click", (e) => {
    dropdownContent.style.left = "0";
});

closeIcon.addEventListener("click", (e) => {
    dropdownContent.style.left = "100vw";
    // setTimeout(() => {
    //     dropdownContent.style.display = "none";
    // }, 1000);
});
