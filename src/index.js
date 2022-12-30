import { fetchImg } from "./js/fetchImg";

const form = document.querySelector('.search-form');
console.log(form);
const btnSubmit = document.querySelector('button');
console.log(btnSubmit);
const input = document.querySelector('input');
console.log(input);



btnSubmit.addEventListener('click' ,fetchImg)