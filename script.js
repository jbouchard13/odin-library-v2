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
const createCard = (book) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML += book.title;

  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card-author");
  cardAuthor.innerHTML += book.author;

  const cardPages = document.createElement("div");
  cardPages.classList.add("card-pages");
  cardPages.innerHTML += book.pages;

  const cardHasRead = document.createElement("div");
  cardHasRead.classList.add("card-hasRead");
  cardHasRead.innerHTML += book.isRead;

  const deleteButton = document.createElement("div");
  deleteButton.classList.add("delete-button", "button");
  deleteButton.innerHTML += "Delete";

  cardContainer.append(
    cardTitle,
    cardAuthor,
    cardPages,
    cardHasRead,
    deleteButton
  );
  bookCardsContainer.appendChild(cardContainer);
};

// create a book constructor that takes in the title, pages, and author
function Book(title, pages, author) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.isRead = "No";
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
mobyDick.updateReadStatus("No");
mobyDick.updateReadStatus("Yes");

console.log(myLibrary);

myLibrary.forEach((book) => {
  createCard(book);
});
