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

//New Book Button
// const addBookBtn = document.getElementById("addBookBtn");
// addBookBtn.addEventListener("click", () => {
//   console.log("clicked!");
// });

//Modal
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("Clicked line 33");
    const modal = document.querySelector(button.dataset.modalTarget);
    console.log(modal);
  });
});
