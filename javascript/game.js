var wins=0;
var loses=0;
var tempNumber=0;


function random(max,min){
     return Math.floor(Math.random()*((max-min)+1)+min);
}// random within a range

    var randomFirst= random(120,19);console.log(randomFirst);
    $(".boxRandom").text(randomFirst);
    
    var randomGem1=random(19,0);console.log(randomGem1);//produces a random number betwen 19 and 0 and stores it for the duration of the game.
    var randomGem2=random(19,0);console.log(randomGem2);
    var randomGem3=random(19,0);console.log(randomGem3);
    var randomGem4=random(19,0);console.log(randomGem4);
    
    function winLose(){
        while( tempNumber==randomFirst){
            wins++;
            $("#win").html("wins: "+ wins);
            reset();
        }
        while( tempNumber>randomFirst){
            loses++;
            $("#lose").html("loses: "+loses);
            reset();
        }
    };
    

$("#gem1").on("click",function(){
    tempNumber= tempNumber+randomGem1;
    $("#total").html(tempNumber);
    console.log(tempNumber);
    winLose();
});


$("#gem2").on("click",function(){
    tempNumber= tempNumber+randomGem2;
    $("#total").html(tempNumber);
    console.log(tempNumber);
    winLose();
    });

    $("#gem3").on("click",function(){
        tempNumber= tempNumber+randomGem3;
        $("#total").html(tempNumber);
        console.log(tempNumber);
        winLose();
        });

        $("#gem4").on("click",function(){
            tempNumber= tempNumber+randomGem4;
            $("#total").html(tempNumber);
            console.log(tempNumber);
            winLose();
            });

            function reset(){
                tempNumber=0;
                $("#total").html(tempNumber);
                randomFirst= random(120,19);console.log(randomFirst);
                    $(".boxRandom").text(randomFirst);
                randomGem1=random(19,0);console.log(randomGem1);
                randomGem2=random(19,0);console.log(randomGem2);
                randomGem3=random(19,0);console.log(randomGem3);
                randomGem4=random(19,0);console.log(randomGem4);
            };