

class Book {
    constructor(title, author){
        this.author = author;
        this.title = title;
    }
}

// UI class: handle UI tasks
class UI{
    static displayBooks(){
        const storedBooks = [
            {
              title: "My New Book",
              author: "Testeroo Lapsy"
            },
            {
                title: "Book 2",
                author: "Testeroo Testy"
            }
     ];
     const books = storedBooks;

     books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book){
        const list = document.querySelector('form-group');
    }
}

const books = [
    {
    title: "Lorem Ipsum",
    author: "Testeroo Testy"
    },
    {
    title: "Second book",
    author: "Testeroo Testy"  
    }


];

//Add a book
document.querySelector('#book-form').addEventListener('add-btn', (e)=>
{
    //Prevent actual submit
e.preventDefault();
    //Book form
   const title = document.querySelector('#title').value;
   const author = document.querySelector('#author').value;

   books.addBook(title, author);

   console.log(books);

})

function addBook(newTitle, newAuthor)
{
    

}