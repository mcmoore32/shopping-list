/*
ALgorithm

Capture the form input and store the value in array

Creat list items from the array

$('this.shopping item').html();

<span class="shopping-item">milk</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div>

*/

var itemArray = [];
var listItem = "";
var deletedItem = "";

function makeList(){
  listItem = "";
  if (itemArray.length !== 0) {
    for(var i=0; i<itemArray.length; i++) {
      listItem = listItem + '<li><span class = "shopping-item">' + itemArray[i] + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
    }
  } else {listItem = "";}
    $('.shopping-list').html(listItem);
    deleteListItems();
};

function checkForDeleted(item) {
  return item !== deletedItem;
};

function deleteListItems(){
  $('.shopping-item-delete').click(function(){
    console.log("Delete button pushed");
    deletedItem = $(this.closest('li')).html();
    deletedItem = deletedItem.slice(28, -220);
    itemArray = itemArray.filter(checkForDeleted);
    makeList();
    console.log(deletedItem);
    console.log(itemArray);
  });
};

function checkListItems(){
  $('.shopping-item-toggle').click(function(){
    console.log("Check button pushed");
  });
};

function addListItems(){
  $('#js-shopping-list-form').submit(function(){
    event.preventDefault();
    var itemEntered = $('#shopping-list-entry').val();
    itemArray.push(itemEntered);
    $('#js-shopping-list-form')[0].reset();
    makeList();
    //    deleteListItems();
    checkListItems();
  });
};

addListItems();







