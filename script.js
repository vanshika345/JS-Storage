//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

const data = {
  firstName: 'Vanshika',
  lastName: 'Sharma',
  age: 18,
  country: 'India',
  state: 'Himachal Pradesh',
};

localStorage.setItem('user', JSON.stringify(data));
console.log(localStorage);

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

const getData = localStorage.getItem('user');
console.log(getData);

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

localStorage.removeItem('user.state');
console.log(localStorage);


//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

localStorage.clear();
console.log(localStorage);

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

const string = JSON.stringify(user);
console.log(string);
