// ==============================TASK 1.1======================================================

// const body = document.querySelector("body");
// const startButton = document.querySelector('button[data-action="start"]');
// const stopButton = document.querySelector('button[data-action="stop"]');

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548"
// ];


// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const changeBackgroundColor = {
//   isActive: false,
//   startChange: null,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;
//     this.startChange = setInterval(() => {
//       body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
//       body.style.transition = '1s ease-in-out';
//     }, 1000);

//   },
//   stop() {
//     clearInterval(this.startChange);
//     this.isActive = false;
//   }
// };


// startButton.addEventListener(
//   "click",
//   changeBackgroundColor.start.bind(changeBackgroundColor)
// );
// stopButton.addEventListener(
//   "click",
//   changeBackgroundColor.stop.bind(changeBackgroundColor)
// );


//==============================TASK 2.1======================================================
// Задание 1
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved"
// через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд 
// которое передали во время вызова функции delay.

// const delay = ms => {
//  Твой код
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms
//============================================================================================


// const delay = (ms) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms)
//     },ms);
//   });
//   return promise;
// }
// function logger(time){ console.log(`Resolved after ${time}ms`)};

// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

//==============================TASK 2.2======================================================
// Задание 2
// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, 
// а принимала всего два параметра allUsers и userName и возвращала промис.

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

// const logger = updatedUsers => console.table(updatedUsers);


// Сейчас работает так
 
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);


//   Должно работать так
 
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);
//============================================================================================

// const users = [{
//     name: 'Mango',
//     active: true
//   },
//   {
//     name: 'Poly',
//     active: false
//   },
//   {
//     name: 'Ajax',
//     active: true
//   },
//   {
//     name: 'Lux',
//     active: false
//   },
// ];


// const toggleUserState = (allUsers, userName) => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );
//   return new Promise((resolve) =>
//     resolve(updatedUsers)
//   )
    
//   };


//     const logger = updatedUsers => console.table(updatedUsers);


//     toggleUserState(users, 'Mango').then(logger);
//     toggleUserState(users, 'Lux').then(logger);


//==============================TASK 2.3======================================================
//     Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и 
//     onError, а принимала всего один параметр transaction и возвращала промис.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction, onSuccess, onError) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       onSuccess(transaction.id, delay);
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
// };

// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// 
  //Работает так
  
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
// /*
//  * Должно работать так
//  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);
//============================================================================================

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
    return new Promise((resolve, reject) => {
        const delay = randomIntegerFromInterval(200, 500);
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            canProcess ? resolve([transaction.id, delay]) : reject(transaction.id);
        }, delay);
    })
}


const logSuccess = ([id, time]) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};



makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);

//==============================TASK 3.0======================================================
// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной 
// даты. 
// Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации 
// событий, во время технического обслуживания и т. д.
//============================================================================================
// const ourDays = document.querySelector("[data-value=days]");
// const ourHours = document.querySelector("[data-value=hours]");
// const ourMins = document.querySelector("[data-value=mins]");
// const ourSecs = document.querySelector("[data-value=secs]");


// class CountdownTimer {
//   constructor({ selector, targetDate}){
//     this.selector = document.querySelector(`${selector}`);
//     this.target = targetDate.getTime();

//   };
//   mySetInterval(){
    
//     setInterval(() =>{
//         let currentTime = Date.now();
//         let time = this.target - currentTime;
//         const days = Math.floor(time / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((time % (1000 * 60)) / 1000);
//         ourDays.textContent = String(days).padStart(3, '0');
//         ourHours.textContent = String(hours).padStart(2, '0');
//         ourMins.textContent = String(mins).padStart(2, '0');
//         ourSecs.textContent = String(secs).padStart(2, '0');
//     },1000)
//   }
// }

// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Nov 6, 2020'),
// });

// timer.mySetInterval();