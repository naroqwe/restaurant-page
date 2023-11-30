import createHomePage from "./home";
import createMenu from "./menu";
import createContact from "./contact";

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

  contactTab.addEventListener("click", () => {
    clearContent();
    createContact();
    console.log("asd");
  });

  const clearContent = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.className = "";
  };
});
