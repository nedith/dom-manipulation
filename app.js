// const titles = document.getElementsByClassName('title');
// console.log(Array.isArray(Array.from(titles)));
// Array.from(titles).forEach((item) => {
//   console.log(item);
// });

// const wrap = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wrap);

// const books = document.querySelectorAll('#book-list li .name');
// console.log(books)

// Array.from(books).forEach((book) => {
//   book.textContent += '(Hello)';
// });

// for (let index = 0; index < books.length; index++) {
//   console.log(Array.from(books)[index]);

// }

// const bookList = document.querySelector('#book-list');

// const bookList = document.querySelector('#book-list');
// bookList.previousElementSibling.querySelector('#page-banner').innerHTML += '<p>Page Banner</p>'

// bookList.parentElement.innerHTML += '<h1>HELLO!</h1>'

// const btns = document.querySelectorAll('#book-list .delete');

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   });
// });

// Remove book
const list = document.querySelector('#book-list ul');
list.addEventListener('click', (e) => {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// Add book
const ul = document.querySelector('ul');
const addBook = document.querySelector('#add-book');
addBook.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = document.querySelector('#add-book input').value;
  const newBook = document.createElement('li');
  newBook.innerHTML = `<span class="name">${value}</span>
	    			<span class="delete">delete</span>`;
  // newBook.textContent = value;
  ul.appendChild(newBook);
});
