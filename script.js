let myLibrary = [];
const container = document.querySelector('#container');

const newButton = document.querySelector('#newBook');
newButton.addEventListener('click',openForm);

const close = document.querySelector('#close');
close.addEventListener('click',closeForm);

const addButton = document.querySelector('#add');
addButton.addEventListener('click',addBookToLibrary);

const readIt = document.getElementsByName('read');

const tableBody = document.querySelector('.table-body');

const inputText=document.querySelectorAll('input');
inputText.forEach(input => {
    input.addEventListener('focus',clearText)});


function Book (tittle,author,pages,read){
    this.tittle=tittle
    this.author=author
    this.pages=pages
    this.read=read
    this.display();
    myLibrary.push(this);
}

Book.prototype.display = function (){

    let row = document.createElement('tr');
    let tittle= document.createElement('td');
    tittle.textContent=this.tittle;
    let author= document.createElement('td');
    author.textContent=this.author;
    let pages= document.createElement('td');
    pages.textContent=this.pages;
    tableBody.appendChild(row);
    row.appendChild(tittle);
    row.appendChild(author);
    row.appendChild(pages);

    
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
    document.querySelector('.bg-form').style.display='none'
}

function openForm (){
    document.querySelector('.bg-form').style.display='flex'
}
function clearText(){
   if (this.getAttribute('type')=='text'){
       this.value="";
   }
}

const element = new Book("The element","Ken Robinson",240,"yes")
const nineTeen = new Book("1984","George Orwell","208","yes")
myLibrary.push(element);
