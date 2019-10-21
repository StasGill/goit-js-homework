import users from './user.js';

// ТЗ
// Напиши функции которые с помощью перебирающих методов массива (никакихfor,splice и т. д.) 
// выполняют следующие операции над массивом объектов пользователей из файла users.js.

// Задание 1
// Получить массив имен всех пользователей (поле name).

// const getUserNames = users => {
//   твой код
// };

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// ========================================================================================================

// const getUserNames = (arr) => {
//   return arr.map(user => user.name);
// }

// console.log('getUserNames', getUserNames(users));


// ========================================================================================================
// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => { твой код };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
// ========================================================================================================

// const newUsers = users
// const getUsersWithEyeColor = (arr, color) => {
  
//   return  arr 
//   .filter((el) => el.eyeColor === color )
//   .map((el) => el.name)
// }

// console.log( getUsersWithEyeColor(newUsers, 'blue')); 


// ========================================================================================================
// Задание 3
// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => { твой код };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// ========================================================================================================

// const newUsers = users
// const getUsersWithEyeColor = (arr, arrgender) => {
  
//   return  arr 
//   .filter((el) => el.gender === arrgender )
//   .map((el) => el.name)
// }

// console.log( getUsersWithEyeColor(newUsers, 'male')); 

// ========================================================================================================
// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
// твой код
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
// ========================================================================================================

// const newUsers = users
// const getUsersWithEyeColor = (arr, status) => {
  
//   return  arr 
//   .filter((el) => el.isActive !== true )
//   .map((el) => el.name)
// }

// console.log( getUsersWithEyeColor(newUsers, 'male')); 



// ========================================================================================================
// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => { твой код };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
// ========================================================================================================

// const newUsers = users
// const getUserWithEmail = (arr, email) => {
  
//   return  arr 
//   .filter((el) => el.email === email )
//   .map((el) => el.name)
// }

// console.log( getUserWithEmail(newUsers, 'shereeanthony@kog.com')); 


// ========================================================================================================

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => { твой код };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40)); [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
// ========================================================================================================

//  const newUsers = users
// const getUsersWithAge = (arr, minage, maxage ) => {
  
//   return  arr 
//   .filter((el) => el.age >= minage )
//   .filter((el) => el.age <= maxage )
//   .map((el) => el.name)
// }

// console.log( getUsersWithAge(newUsers, 20 , 30)); 
// console.log( getUsersWithAge(newUsers, 30 , 40)); 



// ========================================================================================================
// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {твой код };

// console.log(calculateTotalBalance(users)); // 20916
// ========================================================================================================

// const newUsers = users
// const calculateTotalBalance = ( totalWages, arr ) =>{
//   return  arr
//   .reduce(( totalWages, arr) => totalWages + arr.balance, 0);
//   }



// console.log(calculateTotalBalance( 0, newUsers ))





// ========================================================================================================
// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => { твой код };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// ========================================================================================================

// const newUsers = users

//  const getUsersWithFriend = ( arr, friendName) => { 
//   return  arr
//   .filter( arr => arr.friends .some(friends => friends === friendName))
//     .map(arr => arr.name)
  
//   };

 
//  console.log(getUsersWithFriend( newUsers, 'Briana Decker'));


// ========================================================================================================
// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => { твой код };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// ========================================================================================================

// const newUsers = users

//  const getNamesSortedByFriendsCount = ( arr ) => { 
//   return  arr
  
  
//   .sort(function(a, b) {
//     if (a.friends.length > b.friends.length) {
//       return 1;
//     }
//     if (a.friends.length < b.friends.length) {
//       return -1;
//     }
//     return 0;
//   })
//   .map(arr => arr.name)
  
  
  
//   };

 
//  console.log('getNamesSortedByFriendsCount', getNamesSortedByFriendsCount( newUsers ));



// ========================================================================================================
// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и 
// они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => { твой код };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem'
// ========================================================================================================


// const getSortedUniqueSkills = users => {
//   let resArr = [];
//   const newArr = users.map(el => (resArr = [...resArr, ...el.skills]));
//   const skillsArr = resArr.filter((item, idx) => {
//     return idx === resArr.indexOf(item);
//   });
//   return skillsArr.sort();
// };
// console.log(getSortedUniqueSkills(users));
//  [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]




// ========================================================================================================