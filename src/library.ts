class Library {

    private books : Book[] =[]

    addBook = (book:Book) :void =>{
        let success=this.books.push(book)
        if(success) console.log(`${book.title} added to library successfully`);
        
    }

    borrowBook = (title:string): void =>{
       const book = this.books.find( (n)=> n.title === title)
       if(book) book.isAvailable = false   
       console.log(`${book?.title} is borrowed`);
       
    }
    
}

class Book {
    title:string;
    isAvailable:boolean
    
    constructor(title:string){
        this.isAvailable=true
        this.title=title
    }

    getTitle=(): string =>{
        return this.title
    }
}

class User {
    protected name:string;
    
    constructor(name:string){
        this.name = name
    }

    getName = (): string =>{
        return this.name
    }
}

class Librarian extends User {

    constructor(name:string){
        super(name)
    }

    addBook = (library:Library, book:Book):void =>{
        // const book =  new Book(title)
        library.addBook(book)
    }

}

class Member extends User {

    constructor(name:string){
        super(name)
    }

    borrowBook = (library:Library, title:string ):void =>{
        library.borrowBook(title)
    }

    returnBook = () : void =>{

    }
}


const library = new Library()
const book1 = new Book("Randamuzham")
console.log(book1.getTitle());

const book2 = new Book("Sree Krishna Parunthu")
console.log(book2.getTitle());

const librarian = new Librarian("ABC")
librarian.addBook(library,book1)
librarian.addBook(library,book2)

let member = new Member("XYZ")
member.borrowBook(library,"Randamuzham")
