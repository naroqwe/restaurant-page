import createHomePage from "./home";
import createMenu from "./menu";

document.addEventListener("DOMContentLoaded", () => {
  createHomePage();

  const homeTab = document.querySelector("#home");
  const menuTab = document.querySelector("#menu");
  const contactTab = document.querySelector("#contact");
  homeTab.addEventListener("click", () => {
    clearContent();
    createHomePage();
  });

  menuTab.addEventListener("click", () => {
    clearContent();
    createMenu();
  });

  const clearContent = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.className = "";
  };
});
