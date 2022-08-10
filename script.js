// alert("linked!");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

// const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
// console.log(theHobbit.info());

function addBookToLibrary() {}

//Modal User Interface
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //console.log("openModalButton CLicked");
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //console.log("closeModalButton Clicked")
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal() {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
let bookTitle = "";
let bookAuthor = "";
let bookPages = "";
let bookReadInput = "";

//User input eventListeners
const inputs = document.querySelectorAll("input");

inputs.forEach((input, index) => {
  index++;
  input.addEventListener("change", () => {
    console.log("change");
    if (index <= 3) {
      bookTitle = document.getElementById("titleInput").value;
      bookAuthor = document.getElementById("authorInput").value;
      bookPages = document.getElementById("pagesInput").value;
      bookReadInput = document.getElementById("readInput");
      inputs[index].focus();
    } //If value has changed and user tries to click previous input. Focus still moves onto next child. Will need to improve.
  });
});

//Adding book to library
const addButton = document.querySelector(".add-button");

let bookRead = NaN;
function isBookRead() {
  if (bookReadInput.checked) {
    bookRead = "Read";
  } else {
    bookRead = "Not Read";
  }
}

let newBook;
addButton.addEventListener("click", () => {
  if (bookTitle != "" && bookAuthor != "" && bookPages != "") {
    isBookRead();
    newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    bookTitle = "";
    bookAuthor = "";
    bookPages = "";
    myLibrary.push(newBook);
    inputs.forEach((input) => {
      input.value = "";
      input.checked = false;
    });
    bookRead.checked = false;
    closeModal(modal);
  } else {
    alert("Please fill in all inputs");
  }
});
