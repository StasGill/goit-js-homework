// function getAllPropValues(arr, prop){
  
//   let totalPrice = 0;
  

// for (const item of arr) {
//   // const name = item.name;
//   // const price = item.price;
//   // const quantity = item.quantity;
//   const {name, price, quantity} = item;
//   if ( name === prop){
//     totalPrice = price * quantity
//   }
// }
  
//   return totalPrice 
// }


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4, },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];


// console.log(getAllPropValues(products, 'Сканер'));

//--------------------------------------------------------------------------------------------------------------------
// Задание 7
// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */

// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const transactions = [ ]

// const account = {
//    id: 1,
//    type:'deposit', 
//    balance: 0,
//    trBalance:0,
//    createTransaction(amount, type) {
//      this.balance +=amount
//      this.trBalance =amount
//      this.type =type
//      this.id += 1
//      transactions.push({...account})
     
//    },
//    deposit(amount) {
//       this. createTransaction(amount, 'deposit')
//    },
//    withdraw(amount) {
//     this. createTransaction(amount, 'withdraw')
//    },
//    getBalance() {
//      console.log(this.balance)
//    },
//    getTransactionDetails(id) {
//     for(let key of transactions){
//       for(let keyTwo in key){
//         if(key[keyTwo] === id){
//         console.log('Youre transaction',key)
//                 }
//                 }
//             }

//    },
//    getTransactionTotal(type) {
//      let totalSum = 0
//      for(let key of transactions){
       
//        for(let keyTwo in key){
        
//         if(key[keyTwo] === type){
        
//           totalSum +=key.trBalance
//           }
//           }
//          }
//      return console.log('Общая сумма транзакций',totalSum)

//    },

//   }

//   // account.createTransaction( 2, 'deposit') 
//   account.deposit( 45 )
//   // account.withdraw( -25 )
//   account.deposit( 40 )
//   account.deposit( 40 )
//   account.withdraw( -25 )
//   account.withdraw( -20 )
//   account.getBalance()
//   account.getTransactionDetails(3)
//   account.getTransactionTotal('withdraw')
//   console.log(transactions)

//   const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',}
