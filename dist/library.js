"use strict";
class Library {
    constructor() {
        this.books = [];
        this.addBook = (book) => {
            let success = this.books.push(book);
            if (success)
                console.log(`${book.title} added to library successfully`);
        };
        this.borrowBook = (title) => {
            const book = this.books.find((n) => n.title === title);
            if (book)
                book.isAvailable = false;
            console.log(`${book === null || book === void 0 ? void 0 : book.title} is borrowed`);
        };
    }
}
class Book {
    constructor(title) {
        this.getTitle = () => {
            return this.title;
        };
        this.isAvailable = true;
        this.title = title;
    }
}
class User {
    constructor(name) {
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
}
class Librarian extends User {
    constructor(name) {
        super(name);
        this.addBook = (library, book) => {
            library.addBook(book);
        };
    }
}
class Member extends User {
    constructor(name) {
        super(name);
        this.borrowBook = (library, title) => {
            library.borrowBook(title);
        };
        this.returnBook = () => {
        };
    }
}
const library = new Library();
const book1 = new Book("Randamuzham");
console.log(book1.getTitle());
const book2 = new Book("Sree Krishna Parunthu");
console.log(book2.getTitle());
const librarian = new Librarian("ABC");
librarian.addBook(library, book1);
librarian.addBook(library, book2);
let member = new Member("XYZ");
member.borrowBook(library, "Randamuzham");
//# sourceMappingURL=library.js.map