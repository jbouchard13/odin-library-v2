const addBtn = document.querySelector(".add-button");
const addForm = document.querySelector(".add-form");
const submit = document.querySelector(".submit");
const closeButton = document.querySelector(".close");
const bookCardsContainer = document.querySelector(".book-cards");

// handlers for opening and closing the collection and add book form
addBtn.addEventListener("click", () => {
  console.log("asdf");
  addForm.classList.toggle("display");
});

submit.addEventListener("click", () => {
  addForm.classList.remove("display");
});

closeButton.addEventListener("click", () => {
  addForm.classList.remove("display");
});

let myLibrary = [];

// function to handle creation of new book cards
const createCard = (book) => {};

// create a book constructor that takes in the title, pages, and author
function Book(title, pages, author) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.isRead = false;
}

// using the prototype, add a function that adds the selected book to the library.
Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
};
// update whether the book has been read or not
Book.prototype.updateReadStatus = function (status) {
  this.isRead = status;
};

const whiteFang = new Book("White Fang", 160, "Jack London");
whiteFang.addBookToLibrary();

const mobyDick = new Book("Moby Dick", 357, "Herman Melville");
mobyDick.addBookToLibrary();
mobyDick.updateReadStatus(true);
mobyDick.updateReadStatus(false);

console.log(myLibrary);
