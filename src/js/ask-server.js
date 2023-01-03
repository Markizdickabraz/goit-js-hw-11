
import axios from "axios";
import Notiflix from "notiflix";

const input = document.querySelector('input');
const btnLoadMore = document.querySelector('.load-more');

export default class NewAskServer {
  constructor(){
    this.page = 1;
    this.name = " ";
  }

  async fetchArticles() {
    this.BASEURL = 'https://pixabay.com/api/';
    this.name = input.value.trim();
    this.per_page = 40;
    this.numberCard = this.per_page;

  if (this.name.length === 0) {
    return;
  }
  try {
    const response = await axios.get(`${this.BASEURL}?key=32463298-aa2adc14f1416dd47ab6801d7&q=${this.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.per_page}&page=${this.page}`);
    const totalHits = await response.data.totalHits;
    console.log(totalHits);
    this.incrementPage();
    if (this.numberCard > totalHits) {
      Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
      btnLoadMore.classList.replace('is-visible', 'is-hidden');

  }
    return response;
  } catch (error) {
    console.log(error);
  }
  }

  incrementPage() {
    this.numberCard *=this.page;
    console.log(this.numberCard);
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

}