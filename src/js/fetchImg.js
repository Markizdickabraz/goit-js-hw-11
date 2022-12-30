export { fetchImg };
import axios from "axios";
import Notiflix from "notiflix";
import { renderImgGallery } from "../index";

const input = document.querySelector('input');
let name = null;

const BASEURL = 'https://pixabay.com/api/';

async function fetchImg() {
  name = input.value;
  if (name.length === 0) {
    return;
  }
  try {
    const response = await axios.get(`${BASEURL}?key=32463298-aa2adc14f1416dd47ab6801d7&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`);
    // const resultArray = await response.data.hits;
    const result = await response.data.hits;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
  
}