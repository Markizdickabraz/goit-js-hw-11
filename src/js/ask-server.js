// export { fetchImg };
import axios from "axios";

const input = document.querySelector('input');
// let name = null;
// let page = 1;
// const BASEURL = 'https://pixabay.com/api/';

// async function fetchImg() {
//   name = input.value;
//   if (name.length === 0) {
//     return;
//   }
//   try {
//     const response = await axios.get(`${BASEURL}?key=32463298-aa2adc14f1416dd47ab6801d7&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`);
//     // const resultArray = await response.data.hits;
//     const result = await response.data.hits;

//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
  
// }

export default class NewAskServer {
  constructor(){
    this.page = 1;
    this.name = " ";
  }

  async fetchArticles() {
    this.BASEURL = 'https://pixabay.com/api/';
    this.name = input.value;
    console.log(this.name);
  if (this.name.length === 0) {
    return;
  }
  try {
    const response = await axios.get(`${this.BASEURL}?key=32463298-aa2adc14f1416dd47ab6801d7&q=${this.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`);
    // const resultArray = await response.data.hits;
    const result = await response.data.hits;
    this.incrementPage();

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}