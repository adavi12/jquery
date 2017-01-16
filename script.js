console.log("JS");
var totalRed = 0;
var totalYellow = 0;
var totalGreen = 0;
var totalBlue = 0;

$(function(){
console.log("JQ is working");
$(".color-button").on("click", function(){

  $(this).attr("data-id");
  $(".container").append('<div class ="color-cube"></div>');
});
//   console.log("this", this);
// if(data-color ==red){
//   totalRed++;
// }
// if(data-color ==yellow){
//   totalYellow++;
// }
//
// if(data-color ==green){
// totalGreen++;
// }
//
// if(data-color == blue){
//   totalBlue++;
// }
// // var $cube = $(".color-cube").data();
// //   $(this).attr("data-id");
// //   $(".container"). append('<div>'+color-cube+'</div>');
//
// }
// );
});//doc ready
