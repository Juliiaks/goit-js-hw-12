

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

    
    const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionsPosition: "bottom",
    captionDelay: 250
 });
   


export function addPictures(images) {

     document.querySelector(".gallery").innerHTML = "";
    const imagesGallery = images
  .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {

        return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <div class="info">
  <p class="field">
  <span class="text">Likes</span>
  <span class="value">${likes}</span>
  </p>
  <p class="field">
  <span class="text">Views</span>
  <span class="value">${views}
  </p>
  <p class="field">
  <span class="text">Comments</span>
  <span class="value">${comments}</span>
  </p >
  <p class="field">
  <span class="text">Downloads</span>
  <span class="value">${downloads}</span>
  </p>
  </div>
</li>`
  }).join(" ");
   
    document.querySelector(".gallery").insertAdjacentHTML("beforeend", imagesGallery);
    lightbox.refresh(); 
 
}
  

