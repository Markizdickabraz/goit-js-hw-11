// import { fetchImg } from "./js/ask-server";
import NewAskServer from "./js/ask-server";
export { renderImgGallery };
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import Notiflix from "notiflix";

const form = document.querySelector('.search-form');
const btnSubmit = document.querySelector('button');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more'); 

const newAskServer = new NewAskServer();

btnSubmit.addEventListener('click', async (e) => {
  e.preventDefault();
  clearArticlesContainer();
  btnLoadMore.classList.add('is-hidden');
  try {
    newAskServer.resetPage();
    const data = await newAskServer.fetchArticles();
    // newAskServer.fetchArticles();
    renderImgGallery(data);
    btnLoadMore.classList.remove("is-hidden");
    let galleryOpenModal = new SimpleLightbox('.gallery a');
      galleryOpenModal.on('show.simplelightbox', function () {
});
  } catch (error) {
    console.log(error.message);
  }
});

function renderImgGallery(data) {
  if (data.length === 0) {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    return;
  }
  const markup = data
    .map(
        (({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
        <div class="photo-card gallery__item">
        <a class="gallery__link" href="${largeImageURL}" style ="display:inline-block">
   <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
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
  gallery.insertAdjacentHTML('beforeend', markup);
}

btnLoadMore.addEventListener('click', async (e) => {
e.preventDefault();
  try {
    const data = await newAskServer.fetchArticles();
    // newAskServer.fetchArticles();
    // newAskServer.incrementPage();
  
    renderImgGallery(data);
    // btnLoadMore.classList.toggle("is-hidden");
    let galleryOpenModal = new SimpleLightbox('.gallery a');
      galleryOpenModal.on('show.simplelightbox', function () {
});
  } catch (error) {
    console.log(error.message);
  }
});

function clearArticlesContainer() {
  gallery.innerHTML = " ";
}