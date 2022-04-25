// Create Dom element

const addBooks = localStorage.getItem('adbooks');
let books = [];

if (addBooks) {
  books = JSON.parse(addBooks);
} else {
  const bookData = [
    {
      id: 1,
      name: 'Lorem ipsum',
      author: 'Testeroo Testyy',
    },
  ];

  localStorage.setItem('adbooks', JSON.stringify(bookData));
  books = JSON.parse(addBooks);
  window.location.reload();
}
// Display book information

const AddBook = document.querySelector('#displaybook');
books.forEach((book) => {
  const newBook = `
  <p>${book.name}</p>
  <p>${book.author}</p>
  <button onclick=deleteBook(${book.id}) class="removebtn"> Remove</button>
  <hr>
  `;
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('test');
  bookDiv.innerHTML = newBook;
  AddBook.appendChild(bookDiv);
});
// Remove button function

function deleteBook(id) {
  if (localStorage.getItem('adbooks') === null) {
    books = books.filter((book) => {
      if (id === book.id) {
        return false;
      }
      return true;
    });
    localStorage.setItem('adbooks', JSON.stringify(books));
    window.location.reload();
  } else {
    localStorage.removeItem('adbooks', JSON.stringify(books));
  }
}
document.addEventListener('DOMContentLoaded', deleteBook);
// Add book information

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
  const name = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  let id = 0;
  if (books.length > 0) {
    id = books[books.length - 1].id + 1;
  }
  books.push({
    id,
    name,
    author,
  });
  localStorage.setItem('adbooks', JSON.stringify(books));
  window.location.reload();
});