function handleForm(){
// setup event listener for submission
// get input value
// assign input value to variable
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const inputValue = $('.js-shopping-list-entry').val();
    // take input variable and create string
    $('.js-shopping-list-entry').val("");
    const listItem = `
    <li>
    <span class="shopping-item">${inputValue}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
  `
  // render the string
  $(".shopping-list").append(listItem);
  })
}

function handleDeleter(){
  // setup event listener UL not just LI for clicking delete button
  $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
  // find the list item "closest" to delte button  // remove listItem from DOm
    $(event.target).closest("li").remove();
  });
}

function handleEdit(){
// setup even listener for UL for clicking the check button
$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
  let randomVariable = $(event.target).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});
// find the class for the span text and toggle the class for strikerough (from css file)
}


function handleEventListeners() {
  handleForm(); 
  // set up event handler for delete button
  handleDeleter();
  // set up event listener for edit 
  handleEdit();
}


$(handleEventListeners); 