function createMenu() {
  const content = document.querySelector("#content");
  const images = [
    "/dist/images/california-pizza.jpg",
    "/dist/images/chicago-pizza.jpg",
    "/dist/images/detroit-pizza.jpg",
    "/dist/images/miami-cuban-pizza.jpg",
    "/dist/images/milan-style.jpg",
    "/dist/images/new-york-pizza.jpg",
  ];
  const descriptions = [
    "California-style Pizza",
    "Chicago Deep-Dish Pizza",
    "Detroit-style Pizza",
    "Miami / Cuban Pizza",
    "Milan-style Pizza",
    "New York-style Pizza",
  ];
  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const desc = document.createElement("p");

    img.src = images[i];
    desc.innerHTML = descriptions[i];

    content.appendChild(div);
    div.appendChild(img);
    div.appendChild(desc);

    content.classList.add("content-menu");
    div.classList.add("menu-load");
  }
}

export default createMenu;
