function newUser(object) {

  object.mood = 'happy'
  object.hobby = 'javascript'
  object.premium = false
const keys = Object.keys(object);


  for (const key of keys){
    `${key}: ${object[key]}`
  }

  return object
}



const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const user1 = {
  name: 'Alex',
  age: 25,
  hobby: 'htm',
  premium: false,
};

console.log(newUser(user));