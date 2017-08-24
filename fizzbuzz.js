function handleFizzBuzz(){
    console.log("THis is working");
    $("#number-chooser").submit(function(event){
        event.preventDefault();
        let userInput = $("#number-choice").val();
        for(let i = 1; i <= userInput; i++){
            if(i%15===0){
                $('.js-results').append("<div class='fizbuzz fizz-buzz-item'> <span>Fizzbuzz</span> </div>");
            }
            else if (i%5===0){
                $('.js-results').append("<div class='buzz fizz-buzz-item'> <span>Buzz</span> </div>"); 
            }
            else if (i%3===0){
                $('.js-results').append("<div class='fizz fizz-buzz-item'> <span>Fizz</span> </div>"); 
            }
            else {
                $('.js-results').append(`<div class='fizz-buzz-item'><span>${i}</span></div>`); 
            }
        }
    });
}



$(handleFizzBuzz);