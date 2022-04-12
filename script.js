const addBtn = document.querySelector(".add-button");
const addForm = document.querySelector(".add-form");
const submit = document.querySelector(".submit");
const closeButton = document.querySelector(".close");
const bookCardsContainer = document.querySelector(".book-cards");

let myLibrary = [];

// function to handle creation of new book cards
const createCard = (book) => {
  // create the container and add the css styling
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  // create the div to contain the book title, add css and text
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML += book.title;
  // create the div to contain the book author, add css and text
  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card-author");
  cardAuthor.innerHTML += book.author;
  // create the div to contain the book pages, add css and text
  const cardPages = document.createElement("div");
  cardPages.classList.add("card-pages");
  cardPages.innerHTML += book.pages;
  // add the div to contain whether the book has been read or not, add css and text
  const cardHasRead = document.createElement("div");
  cardHasRead.classList.add("card-hasRead");
  cardHasRead.innerHTML += book.isRead;
  // add the delete button div to the card, add css and text
  const deleteButton = document.createElement("div");
  deleteButton.classList.add("delete-button", "button");
  deleteButton.innerHTML += "Delete";
  deleteButton.dataset.title = book.title;
  // add all card elements into the card container
  cardContainer.append(
    cardTitle,
    cardAuthor,
    cardPages,
    cardHasRead,
    deleteButton
  );
  // add the new book card to the book card container
  bookCardsContainer.appendChild(cardContainer);
};

// function to handle deleting a single card
const deleteCard = (book) => {};

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

// render the cards to the book collection
myLibrary.forEach((book) => {
  createCard(book);
});

// handlers for opening and closing the collection and add book form
addBtn.addEventListener("click", () => {
  console.log("asdf");
  addForm.classList.toggle("display");
});

submit.addEventListener("click", () => {
  // gather user input from form
  const titleVal = document.querySelector("#title").value;
  const authorVal = document.querySelector("#author").value;
  const numberVal = document.querySelector("#pages").value;
  const readVal = document.querySelector("#hasRead").value;
  console.log(titleVal, authorVal, numberVal, readVal);
  // use that input to create a new Book
  let newBook = new Book(titleVal, authorVal, numberVal);
  newBook.updateReadStatus(readVal);
  // add that new Book to the library array
  newBook.addBookToLibrary();
  // add the new book to the page
  createCard(newBook);
  // close the form window
  addForm.classList.remove("display");
});

const deleteEl = document.querySelectorAll(".delete-button");
const deleteBtns = Array.from(deleteEl);

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.dataset.title);
  });
});

closeButton.addEventListener("click", () => {
  addForm.classList.remove("display");
});

// let newMyLibary = myLibrary.filter((book) => {
//   book.title === "White Fang";
// });

// console.log(newMyLibary);
