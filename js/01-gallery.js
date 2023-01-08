import { galleryItems } from "./gallery-items.js";
// Change code below this line
const paletContainer = document.querySelector(".gallery");
const imgMarkup = createImgGalleryMarkup(galleryItems);

paletContainer.insertAdjacentHTML("beforeend", imgMarkup);

// console.log(createImgGalleryMarkup(galleryItems));
function createImgGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

paletContainer.addEventListener("click", openImgEl);
// import * as basicLightbox from 'basiclightbox';
function openImgEl(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute(
      "data-source"
    )}" width="800" height="600">
`);

  instance.show();

  paletContainer.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}
