import { galleryItems } from "./gallery-items.js";
// Change code below this line
const paletContainer = document.querySelector('.gallery');
const imgMarkup = createImgGalleryMarkup(galleryItems);

paletContainer.insertAdjacentHTML('beforeend', imgMarkup);

console.log(createImgGalleryMarkup(galleryItems));
function createImgGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${preview}">
                <img
                class="gallery__image"
                src="${original}"
                data-source="${preview}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}
