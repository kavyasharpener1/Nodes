//TRAVERSING THE DOM
var itemList = document.querySelector('#items');
//ParentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

//ParentElement
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

//ChildNodes
console.log(itemList.childNodes);

//Childrens 
console.log(itemList.children)

//firstchild
console.log(itemList.firstChild)

//firstelementchild
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'Hello';

//lastElementChild
console.log(itemList.lastElementChild.textContent);

//lastChild
console.log(itemList.lastChild);

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);

//previouselementsibling
console.log(itemList.previousElementSibling);

//createElement
var newDiv = document.createElement('div');
newDiv.className = "hello";
newDiv.id = "divId";
//newDiv.textContent='Good Night';
console.log(newDiv);

//setAttribute
newDiv.setAttribute('title', 'Hello Div');

//createTextNode
var newDivText = document.createTextNode('Hello world');

//appendChild
newDiv.appendChild(newDivText);

//Now go head and add HEllo word before Item Lister
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

//Now go head and add HEllo word before Item 1
var items = document.querySelector('div .list-group');
var li=document.querySelector('div li');
items.insertBefore(newDiv, li);