let myLibrary = [];

function book (title, pages, author){
    this.title = title
    this.pages = pages
    this.author = author
    this.read = false

    this.info = function() {
        statusMessage = this.title + " by " + this.author + ", " + this.pages + " pages, ";
        // console.log(statusMessage);
        if (this.read) {
            statusMessage += "has been read";
        }
        else {
            statusMessage += "not read yet"
        }
        return statusMessage;
    }

    this.Explore = function() {
        this.read = true;
    }
}

function addBookToLibrary (book) {
    myLibrary.push(book);
    // console.log(book.info());
}

function testLibrary () {
    for (let i = 0; i < myLibrary.length - 1; i += 1)
    {
        console.log(myLibrary[i].info());
    }
}

// addBookToLibrary (new book("Test", 111111111, "Test"));
// addBookToLibrary (new book("Test1", 2, "Test1"));
// addBookToLibrary (new book("Test2", 333, "Test2"));
// addBookToLibrary (new book("Test3", 4444, "Test3"));
// addBookToLibrary (new book("Test4", 555555, "Test4"));

// testLibrary();

function getTitleDiv (title) {
    var div = document.createElement("div");
    div.innerHTML = title;
    return div;
}
function getPageseDiv (pages) {
    var div = document.createElement("div");
    div.innerHTML = pages;
    return div;
}
function getAuthorDiv (author) {
    var div = document.createElement("div");
    div.innerHTML = author;
    return div;
}
function getReadDiv (read) {
    var div = document.createElement("div");
    if (read) {
        div.innerHTML = "Read";
    }
    else {
        div.innerHTML = "Not Read";
    }
    return div;
}

function displayLibrary () {
    for (let i = 0; i < myLibrary.length -1; i++) {
        // add book div
        var book = document.createElement("div");
        book.appendChild(getTitleDiv(myLibrary[i].title));
        book.appendChild(getPageseDiv(myLibrary[i].pages));
        book.appendChild(getAuthorDiv(myLibrary[i].author));
        book.appendChild(getReadDiv(myLibrary[i].read));
        book.classList.add("book_card");
        document.getElementById("library_container").appendChild(book);
    }
}

function clearLibrary () {
    myLibrary = [];
    let oldLibrary = document.getElementById("library_container");
    while (oldLibrary.firstChild)
    {
        oldLibrary.removeChild(oldLibrary.firstChild)
    }
}

function clearLibraryDisplay () {
    let oldLibrary = document.getElementById("library_container");
    while (oldLibrary.firstChild)
    {
        oldLibrary.removeChild(oldLibrary.firstChild)
    }
}

// displayLibrary();

function viewForm () {
    document.getElementById("toggle_form").style.display = "grid";
}

document.addEventListener("submit", function(event){
    console.log("a");
    event.preventDefault();
    console.log("a");
    var form = document.getElementById("toggle_form");
    let title = form.new_book_title_text.value;
    let pages = form.new_book_pages_text.value;
    let author = form.new_book_author_text.value;
    addBookToLibrary (new book(title, pages, author));
    clearLibraryDisplay;
    displayLibrary();
    testLibrary();
})