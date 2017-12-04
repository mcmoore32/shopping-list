/*
ALgorithm

Capture the form input and store the value in array

Creat list items from the array

*/

function addListItems(){
  var itemArray = [];
  var listItem = '';
  $('#js-shopping-list-form').submit( function(event){
    event.preventDefault();
    var itemEntered = $('#shopping-list-entry').val();
    itemArray.push(itemEntered);
    var listItem = '';
    for(i=0; i<itemArray.length; i++) {
      listItem = listItem + '<li><span class = "shopping-item">' + itemArray[i] + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
      $('.shopping-list').html(listItem);
    }
  });
};

addListItems();



