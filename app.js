/*
ALgorithm

Capture the form input and store the value in array

Creat list items from the array

*/

function makeList(arrayVariable, listVariable){
  for(var i=0; i<arrayVariable.length; i++) {
    listVariable = listVariable + '<li><span class = "shopping-item">' + arrayVariable[i] + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
    $('.shopping-list').html(listVariable);
  };
};

function deleteListItems(){
  $('.shopping-item-delete').click(function(){
    console.log("Delete button pushed");
  });
};

function checkListItems(){
  $('.shopping-item-toggle').click(function(){
    console.log("Check button pushed");
  });
};

function addListItems(){
  var itemArray = [];
  var listItem = "";
  $('#js-shopping-list-form').submit(function(){
    event.preventDefault();
    var itemEntered = $('#shopping-list-entry').val();
    itemArray.push(itemEntered);
    $('#js-shopping-list-form')[0].reset();
    listItem = '';
    makeList(itemArray, listItem);
    deleteListItems();
    checkListItems();
  });
};

addListItems();
//deleteListItems();
//checkListItems();







