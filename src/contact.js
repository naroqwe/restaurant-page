function createContact() {
  const content = document.querySelector("#content");
  const contactPage = document.createElement("div");
  const img = document.createElement("img");
  const paragraph = document.createElement("p");

  paragraph.innerHTML = `"You can find us here!"`;

  img.src = "/dist/images/location.jpg";

  img.classList.add("load-contact");
  paragraph.classList.add("load-paragraph");
  contactPage.classList.add("load-page");
  content.classList.add("content-homepage");

  content.appendChild(contactPage);
  contactPage.appendChild(paragraph);
  contactPage.appendChild(img);
}

export default createContact;
