function createHomePage() {
  const content = document.querySelector("#content");

  const menuPage = document.createElement("div");
  const img = document.createElement("img");
  const paragraph = document.createElement("p");

  paragraph.innerHTML = `"We make the best pizza"`;

  img.src = "/dist/images/chef.jpg";

  img.classList.add("load-img");
  paragraph.classList.add("load-paragraph");
  menuPage.classList.add("load-page");
  content.classList.add("content-homepage");

  content.appendChild(menuPage);
  menuPage.appendChild(paragraph);
  menuPage.appendChild(img);
}

export default createHomePage;
