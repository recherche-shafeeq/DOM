var listItems = document.getElementById('items');
var form = document.getElementById('addForm');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit' , addItem);

filter.addEventListener('keyup' , filterItems);

//delete event
listItems.addEventListener('click' , removeItem);
function addItem(e) {
	//preventing default behaviour of submit
	e.preventDefault();
	
	//to get the input value inside the textbox
	var input = document.getElementById('item').value;

	//creating element
	var li = document.createElement('li');
	//adding class name
	li.className = 'list-group-item';
	
	//add text node with input value
	li.appendChild(document.createTextNode(input));
	
	//creating button
	var deletebtn = document.createElement('button');
	
	//adding classes to the button	
	deletebtn.className = 'btn btn-danger btn-sm float-right delete';
	
    //adding text to the button
	deletebtn.appendChild(document.createTextNode('X'));
	
    //appending button to li
	li.appendChild(deletebtn);
	//adding the created li to the list items
	listItems.appendChild(li);
}


//removing item
function removeItem(e) {
	if(e.target.classList.contains('delete')) {
		if(confirm('Are you sure?')){
			var li = e.target.parentElement;
			console.log(li);
			listItems.removeChild(li);
		}
	} 
}


function filterItems(e) {
	
	//convert input text to lwr cas
	var textInput = e.target.value.toLowerCase();
	
	//get lst
	var items = listItems.getElementsByTagName('li');
	//console.log(items);
	
	//converting HTML list to an array
	Array.from(items).forEach(function(items) {
	    var itemName = item.firstChild.textContent;
		if() {
			
		}
	});
	
}