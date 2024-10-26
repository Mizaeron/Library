const myLibrary = ["theHobbit", "alchemist", "crimeAndPunishment"];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const theHobbit = new Book('The Hobbit', 'by J.R.R Tolkien', '295 pages', 'not read yet');
const alchemist = new Book('The Alchemist', 'By Paulo Coelho', '192 pages', 'read' );
const crimeAndPunishment = new Book('Crime and Punishment', 'by Fjodor M. Dostojewskij', '528 pages', 'not read yet');

const title = document.querySelector(".book .title");
const author = document.querySelector(".book .author");
const pages = document.querySelector(".book .pages");
const read = document.querySelector(".book .read-status");

title.textContent = theHobbit.title;
author.textContent = theHobbit.author;
pages.textContent = theHobbit.pages;
read.textContent = theHobbit.read;