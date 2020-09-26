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
        let author= document.createElement('td');
        let pages= document.createElement('td');
        let read=document.createElement('td');
        let readIcon = document.createElement('i');
        let trashIcon = document.createElement('i');
        let deleete = document.createElement('td');
        tittle.textContent=book.tittle;
        author.textContent=book.author;
        pages.textContent=book.pages;
       
        
        if(book.read=='yes'){
            readIcon.setAttribute('class','fa fa-check');
        }
        else{
            readIcon.setAttribute('class','fa fa-close')
        }
        readIcon.addEventListener('click',changeStatus);

        trashIcon.setAttribute('class','fa fa-trash-o');
        trashIcon.classList.add('trash');
        read.appendChild(readIcon);
        deleete.appendChild(trashIcon);
        trashIcon.addEventListener('click',deleteBook);

        tableBody.appendChild(row);
        row.appendChild(tittle);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(read);
        row.appendChild(deleete);
    }
        books = tableBody.querySelectorAll('tr');
}

function addBookToLibrary (){
    let tittle=document.getElementById('tittle').value;
    let author=document.getElementById('author').value;
    let pages=document.getElementById('pages').value;
    
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

function deleteBook(){ 
    let row = this.parentNode.parentNode;
    let tittles=row.childNodes[0].textContent;
    myLibrary = myLibrary.filter(book => {
        return !(book.tittle==tittles);
    })
    tableBody.removeChild(row);
    console.log(myLibrary);
}

function changeStatus(){
    let row = this.parentNode.parentNode;
    let tittles=row.childNodes[0].textContent;
    let statusRow = myLibrary.filter(book => {
        return book.tittle==tittles
    })
    if(this.getAttribute('class')=='fa fa-check'){
        this.removeAttribute('class');
        this.setAttribute('class','fa fa-close')
        statusRow[0].read='no';
        
    }
    else if(this.getAttribute('class')=='fa fa-close'){
        this.removeAttribute('class');
        this.setAttribute('class','fa fa-check')
        statusRow[0].read='yes';
    }
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
const alquim = new Book("The alquimist","Paulo Coelho",215,"yes");
 displayLibrary();
