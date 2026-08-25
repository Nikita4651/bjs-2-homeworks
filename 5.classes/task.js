class PrintEditionItem {
    #name;
    #releaseDate;
    #pagesCount;
    #_state;
    #type;
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.#name = name;
        this.#releaseDate = releaseDate;
        this.#pagesCount = pagesCount;
        this.#_state = state;
        this.#type = type;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(state) {
        this.#_state = Math.max(0, Math.min(100, state));
    }
    get state() {
        return this.#_state
    }
    get name() { return this.#name; }
    get releaseDate() { return this.#releaseDate; }
    get pagesCount() { return this.#pagesCount; }
    get type() { return this.#type; }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type = "magazine") {
        super(name, releaseDate, pagesCount, state, type);
    }
}
class Book extends PrintEditionItem {
    #_author;
    constructor(author, name, releaseDate, pagesCount, state, type = "book") {
        super(name, releaseDate, pagesCount, state, type);
        this.#_author = author;
    }
    get author() {
        return this.#_author;
    }
}
class NovelBook extends Book {

    constructor(author, name, releaseDate, pagesCount, state, type = "novel") {
        super(author, name, releaseDate, pagesCount, state, type);


    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "fantastic") {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "detective") {
        super(author, name, releaseDate, pagesCount, state, type);

    }
}
class Library {
    #_name;
    #_books;
    constructor(name, books = []) {
        this.#_name = name;
        this.#_books = books;
    }
    addBook(PrintEditionItem) {
        if (PrintEditionItem.state > 30) {
            this.books = PrintEditionItem;
        }
    }
    findBookBy(type, value) {
        const index = this.books.findIndex(book => book[type] === value)
        if (index < 0) {
            return null;
        }
        return this.books[index];
    }
    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        if (!book) return null;
        const index = this.books.indexOf(book);
        this.books.splice(index, 1);

        return book;
    }
    set books(book) {
        this.#_books.push(book);
    }
    get books() {
        return this.#_books;
    }
    get name() {
        return this.#_name;
    }
}