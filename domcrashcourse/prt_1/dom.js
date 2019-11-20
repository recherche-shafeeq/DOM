// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
//var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
//items[1].innerHTML = '<h1>Hello 2222</h1>';
//console.log('this was changed '+items[1])
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// Examine the document object
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.title);
console.log(document.all);
document.all[10].textContent = "Hello World";
console.log(document.forms);
console.log(document.links)
console.log(document.images);
*/


    // getting by ids



var headertitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
/*
*/


console.log(headertitle);
console.log(header);
/*
console.log(headertitle.textContent);
console.log(headertitle.innerText); //pays attention to style


	
headertitle.innerHTML = '<h3>Hello</h3>';
console.log('this is a header title')
console.log(headertitle);
*/
  // style
  //headertitle.style.borderBottom = 'solid 3px #000';
// items.style.background = '#f4f4f4';
  // get elements by class name

/* 

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
console.log(items[2]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.background = 'yellow';
 
 //items.style.background = '#f4f4f4';
 
for(var i = 0; i < 4 ; i++) {
	//can write background or backgroundColor
	items[i].style.background = '#f4f4f4';
}

*/
/*
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[2]);
li[2].textContent = 'Hello';
li[2].style.fontWeight = 'bad';
li[2].style.background = 'yellow';

// items.syle.background = '#f4f4f4';

for(var i = 0 ;i < li.length ;i++) {
	li[i].style.background = '#f4f4f4';
}

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var some_var = document.querySelector('.title');
some_var.style.background = 'yellow';
some_var.style.padding = '4px';
some_var.style.border = 'solid 3px #ccc'
some_var.style.textAlign = 'center';
*/
/*
console.log(document.querySelector('#main-header'));
console.log(document.getElementById('main-header'));
console.log(document.getElementsByClassName('list-group-item'));
var input = document.querySelector('input');
input.value = 'Hello World';
var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';
var last_item = document.querySelector('.list-group-item:last-child');
last_item.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
*/
           
		    //Query Selector All
/*
var titles = document.querySelectorAll('.title');

console.log(titles);

titles[0].textContent = 'something';


var variable = console.log(document.querySelector('.titles'));
console.log(variable);
var odd = document.querySelectorAll('li:nth-child(odd)');
console.log(odd);

for(var i = 0; i < odd.length; i++) {
	odd[i].style.background = '#f4f4f4';
}

            // Traversing the dom
			
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor  = '#f4f4f4';


var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor  = '#f4f4f4';

*/

var itemsList = document.querySelector('#items');

//console.log(itemsList.childNodes);
/*           //    it is a Node List
		   //    with texts in between
console.log(itemsList.children);
		   //    it is an HTML collection

console.log(itemsList.children[1]);


console.log(itemsList.firstChild);
console.log(itemsList.firstElementChild);
itemsList.firstElementChild.textContent = 'shafeeq';
itemsList.lastElementChild.textContent = 'last element';
*/
 /*          
           //next sibling && previous sibling
console.log(itemsList.nextSibling);
console.log(itemsList.previousSibling);
           // nextElementSibling && prvious sibling
console.log(document.querySelector('#items').previousElementSibling);
console.log(itemsList.nextElementSibling);
*/

// create element
// create a div
var newDiv = document.createElement('div');

// add a class to it
newDiv.className = 'classAdded';

// add an id to it
 newDiv.id = 'idName';

// add attributes
newDiv.setAttribute('title','Hello Div');

// create text node
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

// know to put it in javascript

//console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header .container h1');

container.insertBefore(newDiv , h1);
//console.log(newDiv);
var variable = document.querySelectorAll('#main #items');
console.log(variable[0][0]);