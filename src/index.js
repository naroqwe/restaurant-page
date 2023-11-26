import createHomePage from "./home";

window.addEventListener("load", createHomePage);

let btns = ["home-tab", "menu-tab", "contact-tab"];

btns.forEach(button, () => {
  let btn = document.getElementsByClassName(button);
  btn.addEventListener("click", () => {
    console.log(btn);
  });
});

// createHomePage();

const homeTab = document.querySelector(".home-tab");
