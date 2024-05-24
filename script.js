
// Library of Book Objects
const myLibrary = [
    // new Book("tempBook1", "tempAuthor1", 100, "read"),
    // new Book("tempBook2", "tempAuthor2", 200, "reading"),
    // new Book("tempBook3", "tempAuthor3", 300, "unread"),
    // new Book("tempBook4", "tempAuthor4", 400, "read"),
    // new Book("tempBook5", "tempAuthor5", 500, "unread"),
    // new Book("tempBook6", "tempAuthor6", 600, "reading"),
];

// Create Book Object
function Book(title, author, pages, read,) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.status = function() {
        if (this.read === "unread") {
            this.read = "reading";
        }
        else {
            this.read = "read";
        }
    };
}

// Create library display
function displayLibrary(Book) {
    // Create DOM Elements
    const library = document.getElementById("book-library");
    const bookElement = document.createElement("div");
    const titleP = document.createElement("p");
    const authorP = document.createElement("p");
    const pagesP = document.createElement("p");
    const readP = document.createElement("p");
    const editStatus = document.createElement("button");
    const deleteBook = document.createElement("button");

    // Set Book Title
    titleP.innerHTML = Book.title;
    bookElement.appendChild(titleP);

    // Set Book Author
    authorP.innerHTML = Book.author;
    bookElement.appendChild(authorP);

    // Set Book Pages
    pagesP.innerHTML = Book.pages;
    bookElement.appendChild(pagesP);

    // Set Book Read Status
    readP.innerHTML = Book.read[0].toUpperCase() + Book.read.slice(1);
    bookElement.appendChild(readP);

    // Create Edit Status Button
    editStatus.innerHTML = "Edit Status";
    editStatus.setAttribute("class", "edit-status");
    bookElement.appendChild(editStatus);

    // Create Delete Book Button
    deleteBook.innerHTML = "Delete";
    deleteBook.setAttribute("class", "delete-book");
    bookElement.appendChild(deleteBook);

    // Create Book Element
    bookElement.setAttribute("class", `book ${Book.read}`);
    library.appendChild(bookElement);

    // Create read status edit feature
    const editStatusButton = document.querySelectorAll(".edit-status");
    const editBook = editStatusButton.item(myLibrary.indexOf(Book));
    editBook.addEventListener("click", () => {
        Book.status();
        bookElement.setAttribute("class", `book ${Book.read}`); /* Duplicate Code */
        readP.innerHTML = Book.read[0].toUpperCase() + Book.read.slice(1); /* Duplicate Code */
    });

    // Create removal feature for books
    const deleteBookButton = document.querySelectorAll(".delete-book");
    const delButton = deleteBookButton.item(myLibrary.indexOf(Book));
    delButton.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(Book), 1);
        delButton.parentElement.remove();
    });
}


// Add new book to library
const newBookButton = document.getElementById("new-book");
const dialog = document.querySelector("dialog");
const submitNewBook = document.querySelector("dialog button");

newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

submitNewBook.addEventListener('click', (event) => {
    let bookTitle = document.getElementById("book-title");
    let bookAuthor = document.getElementById("book-author");
    let bookPages = document.getElementById("book-pages");
    let bookProgress = document.getElementsByName("book-progress");
    let form = document.querySelector("form");

    for (let i = 0; i < bookProgress.length; i++) {
        if (bookProgress[i].checked) {
            bookProgress.value = bookProgress[i].value;
        }
    }

    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookProgress.value);
    myLibrary.push(newBook);
    displayLibrary(newBook);
    dialog.close();
    form.reset();
    event.preventDefault();
});

const showLibraryButton = document.getElementById("show-library");
showLibraryButton.addEventListener("click", () => {
    console.log(myLibrary);
});