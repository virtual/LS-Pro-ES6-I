const me = 'LambdaSchool';
const you = 'Student';

let numberOfCatsIOwn = 0;
const buyCat = (numberOfCatsIOwn) => {
  numberOfCatsIOwn++;
  console.log(`I now own ${numberOfCatsIOwn} cats!`);
}
 
const favoriteBooks = [
  'Captain Underpants',
  'Magic Treehouse',
  'Brown Bear, Brown Bear, What Do You See?',
  'Slaughterhouse 5',
];
const likesCaptainUnderpants = (bookList) => {
  bookList.forEach(function(book) {
    if (book === 'Captain Underpants') return true;
  });
  return false;
}
const result = likesCaptainUnderpants(favoriteBooks);

const sumInput = (...arguments) => {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
let sum = sumInput(1, 2, 3, 4, 5);

const add = (x = 0, y = 0) => (x + y);
sum = add(5, 5);
