//created global variables to reference the number/count of each color when its corresponding button is clicked
var totalRed = 0;
var totalYellow = 0;
var totalGreen = 0;
var totalBlue = 0;

console.log("JS");

//doc ready
$(function(){
  console.log("JQ is working");
  //click event for the color-button which will then add the color-cube
  //the appended div is dynamically generated where $(this) refers to the color-button and the attribute (attr("data-color") refernces the key value pair which corresponds to the index.html)
  //color-cube is also mentioned within the styles.css
  $('.color-button').on('click', function(){
    var color = $(this).attr("data-color");
    $(".container").append('<div class ="color-cube '+color+'"></div>');
    //series of conditional statements using var color previously assigned

    if(color === 'red'){
      totalRed++;
        $('#red').text(totalRed);
    }
      //use span id for each color as in html file

    else if(color === 'yellow'){
      totalYellow++;
      $('#yellow').text(totalYellow);
    }
    else if(color === 'green'){
      totalGreen++;
      $('#green').text(totalGreen);
    }
    else if(color === 'blue'){
      totalBlue++;
      $('#blue').text(totalBlue);
    }
  }
);
}); //end of doc ready
