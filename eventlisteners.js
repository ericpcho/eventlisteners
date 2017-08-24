function handleEventListeners() {
  console.log("Hi");

  $('.thumbnail').click(function(event) {
    let imgClick = $(this).find("img").attr('src');
    let imgAlt = $(this).find("img").attr('alt');

  $('.hero').find("img").attr("src",imgClick); 
  $('.hero').find("img").attr("alt",imgAlt);

  

  
  });
}


$(handleEventListeners);

