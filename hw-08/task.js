import gallery from "./gallery-items.js";

const galleryUl = document.querySelector(".gallery");
const newLighthbox = document.querySelector(".lightbox");
// const butLighthbox = document.querySelector(".lightbox__button");
// const iconLighthbox = document.querySelector(".material-icons") 

const imageLighthbox = document.querySelector(".lightbox___image")
const fragment = document.createDocumentFragment();

gallery.forEach(el => {
 const li = document.createElement("li");
 li.classList.add("gallery__item");
 li.insertAdjacentHTML(
   "afterbegin",
   
   `<a class="gallery__link" href="${el.original}">
   <img class = "gallery__image" src = "${el.preview}" data-source="${el.original}" alt = "${el.description}">
   <span class="gallery__icon">
    <i class="material-icons">zoom_out_map</i>
  </span></a>`
 );
 fragment.append(li);
//  console.log(li);
});

galleryUl.appendChild(fragment);






galleryUl.addEventListener('click', e => {
  event.preventDefault();
  if(e.target.nodeName === "IMG") {
     newLighthbox.classList.add('is-open')
     imageLighthbox.src = e.target.dataset.source
  }
 })


 newLighthbox.addEventListener("click", e => {
  console.log(e.target.nodeName);
  if (e.target.nodeName === "I" || e.target.nodeName !== "IMG") {
    newLighthbox.classList.remove("is-open");
  }
 });

 window.addEventListener("keydown", function(e) {
  
  if (e.keyCode === 27 ) {
    newLighthbox.classList.remove("is-open");
  }
 });





