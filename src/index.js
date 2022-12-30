import { fetchImg } from "./js/fetchImg";
export { renderImgGallery };
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.search-form');
const btnSubmit = document.querySelector('button');
const gallery = document.querySelector('.gallery');


btnSubmit.addEventListener('click', async (e) => {
  e.preventDefault();

  try {
    const data = await fetchImg();
    renderImgGallery(data);
  } catch (error) {
    console.log(error.message);
  }
});

function renderImgGallery(data) {
  
  const markup = data
    .map(
        (({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
        <div class="photo-card gallery__item">
        <a class="gallery__link" href="${largeImageURL}" style ="display:block">
   <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy"/>  </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b>${likes}
        </p>
        <p class="info-item">
          <b>Views</b>${views}
        </p>
        <p class="info-item">
          <b>Comments</b>${comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>${downloads}
        </p>
      </div>
      </div> `;
        }))
    .join(" ");
  gallery.insertAdjacentHTML('afterbegin', markup);
}

let galleryOpenModal = new SimpleLightbox('.gallery a',{captionsData: "alt", captionDelay : 250});
galleryOpenModal.on('show.simplelightbox', function () {
});

// galleryOpenModal.on('error.simplelightbox', function (e) {
// 	console.log(e); // some usefull information
// });

// gallery.addEventListener('click', selectImg );

// function selectImg (event){
//   event.preventDefault();
//   // console.dir(event.target);
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const galleryImg = document.querySelectorAll('.gallery__image');
    
//   galleryImg.forEach(img => {img.src = img.dataset.source});

  
// };