const addBtn = document.querySelector(".add-button");
const addForm = document.querySelector(".add-form");
const submit = document.querySelector(".submit");
const closeButton = document.querySelector(".close");
const bookCardsContainer = document.querySelector(".book-cards");
const headerEl = document.querySelector(".library-header");

let myLibrary = [];

// create a function to handle toggling of what displays
const toggleDisplay = () => {
  addForm.classList.toggle("display");
  bookCardsContainer.classList.toggle("hide");
  headerEl.classList.toggle("hide");
};

// function to handle creation of new book cards
const createCard = (book, index) => {
  console.log();
  // create the container and add the css styling
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  cardContainer.setAttribute("id", index);
  // create an element to contain the book info, add css
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");
  // create the div to contain the book title, add css and text
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML += `Title: ${book.title}`;
  // create the div to contain the book author, add css and text
  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card-author");
  cardAuthor.innerHTML += `Author: ${book.author}`;
  // create the div to contain the book pages, add css and text
  const cardPages = document.createElement("div");
  cardPages.classList.add("card-pages");
  cardPages.innerHTML += `Page Count: ${book.pages}`;
  // add the div to contain whether the book has been read or not, add css and text
  const cardHasRead = document.createElement("div");
  cardHasRead.classList.add("card-hasRead");
  cardHasRead.innerHTML += `Read? ${book.isRead}`;
  // add the delete button div to the card, add css and text
  const deleteButton = document.createElement("div");
  deleteButton.classList.add("delete-button", "button");
  deleteButton.innerHTML += "Remove";
  // add data attribute that contains the array index of the book
  deleteButton.dataset.index = index;
  // add event listener to the delete button
  deleteButton.addEventListener("click", (e) => {
    let index = e.target.dataset.index;
    deleteCard(index);
  });
  // add all card elements into the card container
  infoContainer.append(cardTitle, cardAuthor, cardPages, cardHasRead);
  cardContainer.append(infoContainer, deleteButton);
  // add the new book card to the book card container
  bookCardsContainer.appendChild(cardContainer);
};

// function to handle deleting a single card
const deleteCard = (index) => {
  // remove the book from the library array
  myLibrary.splice(index, 1);
  // remove the book card from the page
  const cardToBeRemoved = document.getElementById(index);
  // remove the specific book from the page
  bookCardsContainer.removeChild(cardToBeRemoved);
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

// render the cards to the book collection
myLibrary.forEach((book) => {
  // get index of each item being rendered. this is for deleting later
  let index = myLibrary.indexOf(book);
  // render cards for each book in the array
  createCard(book, index);
});

// handlers for opening and closing the collection and add book form
addBtn.addEventListener("click", () => {
  toggleDisplay();
});
// adding new card to the library
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
  // get the index of the new book
  let index = myLibrary.indexOf(newBook);
  // add the new book to the page
  createCard(newBook, index);
  // close the form window
  toggleDisplay();
});
// closes the form
closeButton.addEventListener("click", () => {
  toggleDisplay();
});
