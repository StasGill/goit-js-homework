// =====================================TASK 1====================================================
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество 
// элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// ==================================================================================================

// const ourCategories = document.querySelector('#categories');
// const liItem = document.querySelectorAll('.item');
// // console.log(liItem);
// liItem.forEach(el => {
//   console.log('Category', el.querySelector('h2').textContent);
//   console.log('Quantity',el.querySelectorAll("li").length);
// })

// =====================================TASK 2====================================================

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит
//  все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
//==================================================================================================



// let element  = document.getElementById('ingredients'); 
// let fragment = document.createDocumentFragment();
// let browsers = ['Картошка','Грибы', 'Чеснок','Помидоры','Зелень','Приправы']

// element.insertAdjacentHTML('beforebegin', '<h2>Ингредиенты</h2>');


// browsers.forEach(function(browser) {
//     let li = document.createElement('li');
//     li.textContent = browser;
//     fragment.appendChild(li);
//     });


// element.appendChild(fragment);


// =====================================TASK 3====================================================


// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй 
// шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];
//==================================================================================================

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// let element  = document.getElementById('gallery');

// let fragment = document.createDocumentFragment();





// images.forEach( el => { element.insertAdjacentHTML('afterbegin', `<li><img src="${el.url} alt="${el.alt}" width="400px"></li>`)})

// console.log(fragment);
// element.appendChild(fragment);



// =====================================TASK 4====================================================

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//==================================================================================================

// let counterValue  = document.getElementById('value');

// let newDecrement = document.querySelector('[data-action="decrement"]') 
// let newIncrement = document.querySelector('[data-action="increment"]') 

// let newCounter = 0

// let counter  = document.getElementById('#counter');

// const plusDecrement = () => {newCounter -= 1;  counterValue.textContent=newCounter };
// const minusIncrement = () => {newCounter += 1; counterValue.textContent=newCounter };


// newDecrement.addEventListener('click', plusDecrement)

// newIncrement.addEventListener('click', minusIncrement)


 

// =====================================TASK 5====================================================
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
//================================================================================================

// let newInput  = document.getElementById('name-input');
// let newOutput  = document.getElementById('name-output');

// newInput.addEventListener('input',function (e)  {
//   newOutput.textContent = e.target.value 
// })

// =====================================TASK 6====================================================
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;}
//================================================================================================

// const valInput  = document.getElementById('validation-input');


// valInput.addEventListener('input', function() {
//   const input = valInput.value;
  
// if (input.length === 6){
//   valInput.classList.remove('invalid');
//   valInput.classList.add('valid');
// }
// else{
//   valInput.classList.add('invalid');
// }
// });





// =====================================TASK 7====================================================
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и 
// изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка 
// будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
//================================================================================================

// const valInput  = document.getElementById('font-size-control');
// const valText  = document.getElementById('text');
// valInput.value = 14;

//  valInput.addEventListener('input', function() {
//    valText.style.fontSize =`${valInput.value}px `
//   }
//  )




// =====================================TASK 8====================================================
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в 
// input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает 
// столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
//================================================================================================





































// const valInput  = document.getElementById('controls');

// const newInput = valInput.firstElementChild

// // console.log(newInput);
// newInput.addEventListener('input', function() {
//   const dInput = newInput.value
//   console.log(dInput);

  
// }
// )
    
  