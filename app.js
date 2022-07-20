// const list = document.querySelector('#book-list ul');
// const forms = document.forms;

// // delete books
// list.addEventListener('click', (e) => {
//   if (e.target.className == 'delete') {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });

// // add books
// const addForm = forms['add-book'];
// addForm.addEventListener('submit', function (e) {
//   e.preventDefault();

//   // create elements
//   const value = addForm.querySelector('input[type="text"]').value;
//   const li = document.createElement('li');
//   const bookName = document.createElement('span');
//   const deleteBtn = document.createElement('span');

//   // add text content
//   bookName.textContent = value;
//   deleteBtn.textContent = 'delete';

//   // add classes
//   bookName.classList.add('name');
//   deleteBtn.classList.add('delete');

//   // append to DOM
//   li.appendChild(bookName);
//   li.appendChild(deleteBtn);
//   list.appendChild(li);
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
// const forms = document.forms;
// const addForm = forms['add-book'];
const addForm = document.querySelector('#add-book');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = document.querySelector('.add-book-input').value;
  const newBook = document.createElement('li');
  newBook.innerHTML = `<span class="name">${value}</span>
      			<span class="delete">delete</span>`;

  // append to DOM
  list.appendChild(newBook);
});

// Hide books
const hideBooks = document.querySelector('#hide');
hideBooks.addEventListener('change', (e) => {
  if (hideBooks.checked) {
    list.style.display = 'none';
  } else {
    list.style.display = 'block';
  }
});

// Filter books
const searchBar = document.querySelector('#search-books input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.querySelectorAll('li');
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().includes(term)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});


// // tabbed content
// const tabs = document.querySelector('.tabs');
// const panels = document.querySelectorAll('.panel');
// tabs.addEventListener('click', (e) => {
//   if (e.target.tagName == 'LI') {
//     const targetPanel = document.querySelector(e.target.dataset.target);
//     Array.from(panels).forEach((panel) => {
//       if (panel == targetPanel) {
//         panel.classList.add('active');
//       } else {
//         panel.classList.remove('active');
//       }
//     });
//   }
// });
