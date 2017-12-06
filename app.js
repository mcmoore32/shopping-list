
//Declare global variable
//itemArray is the state variable with the current shopping list items
var itemArray = [];

//This sets an event listener on the form
//gets the value of the item typed into the form
//pushes this item to the global array, resets the form and calls makeList to create the new DOM
function addListItems(){
  $('#js-shopping-list-form').submit(function(){
    event.preventDefault();
    var itemEntered = $('#shopping-list-entry').val();
    itemArray.push(itemEntered);
    $('#js-shopping-list-form')[0].reset();
    makeList();
  });
};

//This function makes the html from the array and puts it in the DOM
//also calls the two event handlers on the buttons after the DOM is made
function makeList(){
  var listItem = "";
  if (itemArray.length !== 0) {
    for(var i=0; i<itemArray.length; i++) {
      listItem = listItem + '<li><span class = "shopping-item">' + itemArray[i] + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
    }
  } else {listItem = ""};
  $('.shopping-list').html(listItem);
  deleteListItems();
  checkListItems();
};


//This listens for click on the delete button
//Extracts the item name from the html with a .slice
//Filters the array to remove the deleted item and then calls makeList
function deleteListItems(){
  $('.shopping-item-delete').click(function(){
    var clickedItem = $(this.closest('li')).html();
    clickedItem = clickedItem.slice(28, -220);
    itemArray = itemArray.filter(function(item) {
      return item !== clickedItem
    });
    makeList();
  });
};

//This listens for click on check button
//It then extracts the item from the html with .slice
//It then finds the index of the item in the arry and adds the <s> tags to the array element
//calls makeList to regenerte the new DOM
function checkListItems(){
  $('.shopping-item-toggle').click(function(){
    clickedItem = $(this.closest('li')).html();
    clickedItem = clickedItem.slice(28, -220);
    var a = itemArray.indexOf(clickedItem);
    itemArray[a] = "<s>" + clickedItem + "</s>";
    makeList();
  });
};

//jquery on ready
//calls the main function to listen for the first item
$(addListItems());







