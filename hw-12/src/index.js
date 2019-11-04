import './styles.css';

let countryItems = document.querySelector('.countryItems')
let countryInput = document.querySelector('.countryInput')
console.log(countryInput.value);





countryInput.addEventListener ("input",(e) => {
if (countryInput.value !== ''){
  let arr = ``;
    fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
  .then(response => response.json())
  .then(data => {
    if (data.length === 1) {
    data.map(item => arr+=

     `<div class="country">
    <div class="countryDescr">
    <h2>${item.name}</h2>
    <span>Capital :${item.capital} </span>
    <br><span>Population :${item.population}</span>
    <br>
      <ul class="countryList">Languages :${item.languages.map(item => {
        return `<li>${item.name}</li>`
      })}
      </ul>
    </div>
      <img src="${item.flag}" alt="" width="190px" height="190px">
    </div>`
    )
    countryItems.innerHTML = arr;
    console.log(data);
  } else if (data.length < 10) {
    data.map(item => arr+=
      `<li>${item.name}</li>`)
      countryItems.innerHTML = arr;
  } else return countryItems.innerHTML = ``;
  })}
})




