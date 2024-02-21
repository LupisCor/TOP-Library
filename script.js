// Library of Book Objects
const myLibrary = [
    new Book("tempBook1", "tempAuthor1", 100, "read"),
    new Book("tempBook2", "tempAuthor2", 200, "read"),
    new Book("tempBook3", "tempAuthor3", 300, "not read"),
    new Book("tempBook4", "tempAuthor4", 400, "not read"),
];

// Create Book Object
function Book(title, author, pages, read, info) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}

// Create library display
function displayLibrary(Book) {
    const library = document.getElementById("book-library");
    const listElement = document.createElement("li");
    const deleteBook = document.createElement("button");
    deleteBook.setAttribute("class", "delete-book");
    deleteBook.innerHTML = "Delete";
    listElement.setAttribute("data-index", myLibrary.indexOf(Book));
    listElement.setAttribute("class", "book");
    listElement.innerHTML = Book.info();
    listElement.appendChild(deleteBook);
    library.appendChild(listElement);

    // Create removal feature for books
    const deleteBookButton = document.querySelectorAll(".delete-book");
    deleteBookButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        button.parentElement.remove();
    })
});
}

function clearForm(...args) {
    for (let arg of args) {
        arg.value = "";
    }
}

for (var item of myLibrary) {
    displayLibrary(item);
}

// Add new book to library
const newBookButton = document.getElementById("new-book");
newBookButton.addEventListener('click', (event) => {
    let bookTitle = document.getElementById("book-title");
    let bookAuthor = document.getElementById("book-author");
    let bookPages = document.getElementById("book-pages");
    let bookRead = document.getElementById("book-read");
    if (!bookRead.checked) {
        bookRead.value = "not read";
    }
    else bookRead.value = "read";
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    myLibrary.push(newBook);
    displayLibrary(newBook);
    clearForm(bookTitle, bookAuthor, bookPages)
    bookRead.checked = false;
    event.preventDefault();
    console.log(deleteBookButton);
})