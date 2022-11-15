//Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Sam', year: 1986 },
  { name: 'Liz', year: 1970 },
  { name: 'Maya', year: 2015 }
];


const comments = [
  { text: 'Love this!', id: 524423 },
  { text: 'Super good!', id: 823423 },
  { text: 'You are the best!', id: 2039842 },
  { text: 'Icli kofte in my fav food ever!', id: 123523 },
  { text: 'Good Good Good!', id: 524423 }
];


// Some and Every Checks 
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

const someAdult = people.some(person => (new Date().getFullYear() - person.year >= 19));
const allAdults = people.every(person => (new Date().
  getFullYear() - person.year >= 19));
  
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
//find the comment with the ID of 823423 

const comment = comments.find(comment => comment.id === 823423);

console.log(comment);

const newArray = [
  ...comments.slice(0,index),
  ...comments.slice(index+1)
]
console.log(newArray)