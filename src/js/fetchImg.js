export { fetchImg };
import axios from "axios";
  
const searchParams = {
  key: '32463298-aa2adc14f1416dd47ab6801d7',
  q:'cat',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
}

const options = JSON.stringify(searchParams);
console.log(options)

const BASEURL = 'https://pixabay.com/api/';

async function fetchImg(e) {
  e.preventDefault();
  try {
    const response = await axios.get(`${BASEURL}?${options}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}