var wins=0;
var loses=0;


function random(max,min){
     return Math.floor(Math.random()*((max-min)+1)+min);
}// random within a range

var randomFirst= random(120,19);console.log(randomFirst);
$(".boxRandom").text(randomFirst);

var tempNumber=0;
/*
function retTempValue(){
    return tempNumber=$("#total").val();
};*/

var randomGem1=random(19,0);console.log(randomGem1);//produces a random number betwen 19 and 0 and stores it for the duration of the game.
var randomGem2=random(19,0);console.log(randomGem2);
var randomGem3=random(19,0);console.log(randomGem3);
var randomGem4=random(19,0);console.log(randomGem4);

$("#gem1").on("click",function(){
  
    tempNumber= tempNumber+randomGem1;
    $("#total").html(tempNumber);
    console.log(tempNumber);
});


$("#gem2").on("click",function(){
    tempNumber= tempNumber+randomGem2;
    $("#total").html(tempNumber);
    console.log(tempNumber);
    });

    $("#gem3").on("click",function(){
        tempNumber= tempNumber+randomGem3;
        $("#total").html(tempNumber);
        console.log(tempNumber);
        });

        $("#gem4").on("click",function(){
            tempNumber= tempNumber+randomGem4;
            $("#total").html(tempNumber);
            console.log(tempNumber);
            });