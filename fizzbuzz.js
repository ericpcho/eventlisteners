function handleFizzBuzz(){
    console.log("THis is working");
    $("#number-chooser").submit(function(event){
        event.preventDefault();
        let userInput = $("#number-choice").val();
        for(let i = 1; i <= userInput; i++){
            if(i%15===0){
                $('.js-results').append("<p>Fizzbuzz</p>"); 
            }
            else if (i%5===0){
                $('.js-results').append("<p>Buzz</p>"); 
            }
            else if (i%3===0){
                $('.js-results').append("<p>Fizz</p>"); 
            }
            else {
                $('.js-results').append(`<p>${i}</p>`); 
            }
        }
    });
}



$(handleFizzBuzz);