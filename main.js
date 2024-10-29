const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const confirmBtn = dialog.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancel")
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formReadStatus = document.querySelector("#read-status");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
})

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const title = formTitle.value;
    const author = formAuthor.value;
    const pages = formPages.value;
    const readStatus = formReadStatus.value;

    const newBook = new Book(title, author, pages, readStatus);

    myLibrary.push(newBook);

    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    formReadStatus.value = "";

    dialog.close();
    displayBooks();
})

const theHobbit = new Book('The Hobbit', 'by J.R.R Tolkien', '295 pages', 'not read yet');
const alchemist = new Book('The Alchemist', 'by Paulo Coelho', '192 pages', 'read' );
const crimeAndPunishment = new Book('Crime and Punishment', 'by Fjodor M. Dostojewskij', '528 pages', 'not read yet');

const title = document.querySelector(".book .title");
const author = document.querySelector(".book .author");
const pages = document.querySelector(".book .pages");
const read = document.querySelector(".book .read-status");

myLibrary.push(theHobbit, alchemist, crimeAndPunishment);

function addBookToLibrary() {
    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
}

function displayBooks() {
    const cardContainer = document.querySelector(".card");
    cardContainer.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const titleElement = document.createElement("p");
        titleElement.classList.add("title");
        titleElement.innerHTML = `<strong>Title:</strong> ${book.title}`;

        const authorElement = document.createElement("p");
        authorElement.classList.add("author");
        authorElement.innerHTML = `<strong>Author:</strong> ${book.author}`;

        const pagesElement = document.createElement("p");
        pagesElement.classList.add("pages");
        pagesElement.innerHTML = `<strong>Pages:</strong> ${book.pages}`;

        const readStatusElement = document.createElement("p");
        readStatusElement.classList.add("read-status");
        readStatusElement.innerHTML = `<strong>Read Status:</strong> ${book.read}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => {
            removeBook(index);
        });

        bookDiv.appendChild(titleElement);
        bookDiv.appendChild(authorElement);
        bookDiv.appendChild(pagesElement);
        bookDiv.appendChild(readStatusElement);
        bookDiv.appendChild(removeButton);

        cardContainer.appendChild(bookDiv);
    })
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

displayBooks();


