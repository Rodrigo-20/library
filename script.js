let myLibrary = [];
let order=-1;
const container = document.querySelector('#container');

const newButton = document.querySelector('#newBook');
newButton.addEventListener('click',openForm);

const close = document.querySelector('#close');
close.addEventListener('click',closeForm);

const addButton = document.querySelector('#add');
addButton.addEventListener('click',addBookToLibrary);

const readIt = document.getElementsByName('read');

const tableBody = document.querySelector('tbody');
let books = tableBody.querySelectorAll('tr');

const headSort = document.querySelectorAll('.sort');
headSort.forEach(head => head.addEventListener('click',sortBooks));

const inputText=document.querySelectorAll('input');
inputText.forEach(input => {
    input.addEventListener('focus',clearText)});



function Book (tittle,author,pages,read){
    this.tittle=tittle
    this.author=author
    this.pages=pages
    this.read=read
    showBook(this);
}

function showBook (book,libraryRow=0){
    if(myLibrary.includes(book) && libraryRow ){
        libraryRow.childNodes[0].textContent=book.tittle;
        libraryRow.childNodes[1].textContent=book.author;
        libraryRow.childNodes[2].textContent=book.pages;
    }
    else if(!myLibrary.includes(book)){
        myLibrary.push(book);
        let row = document.createElement('tr');
        let tittle= document.createElement('td');
        tittle.textContent=book.tittle;
        let author= document.createElement('td');
        author.textContent=book.author;
        let pages= document.createElement('td');
        pages.textContent=book.pages;
        tableBody.appendChild(row);
        row.appendChild(tittle);
        row.appendChild(author);
        row.appendChild(pages);}

        books = tableBody.querySelectorAll('tr');
}

function addBookToLibrary (){
    let tittle=document.getElementById('tittle').value;
    let author=document.getElementById('author').value;
    let pages=document.getElementById('pages').value;
    let read;
    readIt.forEach(rbutton =>{
        rbutton.checked ? read = rbutton.value : 0
    } )
    book = new Book(tittle,author,pages,read) ;
    
    myLibrary.forEach(books=>console.log(books));
    
     
}

function closeForm (){
    
    document.querySelector('.bg-form').style.display='none';
    
}

function openForm (){
    document.querySelector('.bg-form').style.display='flex'
}
function clearText(){
   if (this.getAttribute('type')=='text'){
       this.value="";
   }
}

function displayLibrary(){
    myLibrary.forEach(book=>showBook(book));
}

function sortBooks (){
    order*=-1
    
    myLibrary.sort((a,b)=>{
        let first;
        let second;
        switch (this.id) {
          case 'tittle-sort': 
             first =  a.tittle.toUpperCase();
             second = b.tittle.toUpperCase();
          break;
          case 'author-sort':
             first =  a.author.toUpperCase();
             second = b.author.toUpperCase();
          break;
          case 'pages-sort':
             first =  a.pages;
             second = b.pages;
          break;     
    }

        return first > second? order:-order } )
        console.table(myLibrary)
    myLibrary.forEach((book,bookIndex) =>{
        books.forEach((row,rowIndex) => {
            if(bookIndex==rowIndex){
                showBook(book,row);}
        })
    })    
        
}


const element = new Book("The element","Ken Robinson",240,"yes")
const nineTeen = new Book("1984","George Orwell","208","yes")

 displayLibrary();
