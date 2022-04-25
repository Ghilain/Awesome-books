


const bookinput=document.getElementById('bookinput');
const displaybook=document.getElementById('displaybook');
const title=bookinput['title1'];
const author=bookinput['author1'];

const awesomebook=[{
    title:'mr',
    author:'david',
}];

const addBook =(title1,author1)=>{};
const createBookElement=()=>{
const bookdiv=document.createElement('div');
const booktitle=document.createElement('p');
const bookauthor=document.createElement('p');

booktitle.innerText=" book title "+title1;
bookauthor.innerText=" book author "+author1;

bookdiv.append(booktitle,bookauthor);  
displaybook.appendChild(bookdiv); 
};

awesomebook.forEach(createBookElement);