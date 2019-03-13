
// Variables
var correctAnswers = 0;
var wrongAnswers = 0;
var delayTimer;
var secondsRemaining = 90;





console.log("Would You LIke To Play A Game!");
    
$(document).ready(function () {

    // Begin the Game - Modal Display
    $("#begin-button").on("click", function(){
        $("#start-game").css("display", "none");
        $(".ghost").prop("checked", false);
        correctAnswers = 0;
        wrongAnswers = 0;
        secondsRemaining = 90;
        delayTimer = setInterval(function(){
            secondsRemaining--;
            $("#timer").text("Time Remaining: " + secondsRemaining + " Seconds");
            console.log(secondsRemaining);
            if(secondsRemaining === 0){
            $("#end-game").css("display", "block");
            $("#winCaption").text("You got " + correctAnswers + " answers correct out of 10!");
            $("#loseCaption").text("You got " + wrongAnswers + " answers incorrect out of 10!");
            submitButton();
            clearInterval(delayTimer);
            }
        }, 1000);
        
    });


    // Answer Checking
    // Question One
    $('#submit-button').on('click', function () {
        var value = $("[name=ghost]:checked").val();
        if(value === 'sue'){
            correctAnswers++;
            console.log('Correct');
        } else {
            wrongAnswers++;
            console.log('Incorrect');
        }            
    });
    

    // Question Two
    $('#submit-button').on('click', function () {
        var value = $("[name=year]:checked").val();
        if(value === '1982'){
            correctAnswers++;
            console.log('Correct');
        } else {
            wrongAnswers++;
            console.log('Incorrect');
        }   
    });


    // Question Three
    $('#submit-button').on('click', function () {
        var value = $("[name=arcade-game]:checked").val();
        if(value === 'computer-space'){
            correctAnswers++;
            console.log('Correct');
        } else {
            wrongAnswers++;
            console.log('Incorrect');
        }   
    });

    // Question Four
    $('#submit-button').on('click', function () {
        var value = $("[name=character]:checked").val();
        if(value === 'bowser-koopa'){
            correctAnswers++;
            console.log('Correct');
        } else {
            wrongAnswers++;
            console.log('Incorrect');
        }   
    });

    // Question Five
    $('#submit-button').on('click', function () {
        var value = $("[name=best-selling]:checked").val();
        if(value === 'tetris'){
            correctAnswers++;
            console.log('Correct');
        } else {
            wrongAnswers++;
            console.log('Incorrect');
        }   
    });

    // Question Six
    $('#submit-button').on('click', function () {
        var value = $("[name=princess]:checked").val();
        if(value === 'peach'){
            correctAnswers++;
            console.log('Correct');
        } else {
            wrongAnswers++;
            console.log('Incorrect');
        }   
    });

    // Question Seven
    $('#submit-button').on('click', function () {
        var value = $("[name=mature-rating]:checked").val();
        if(value === 'mortal-kombat'){
            correctAnswers++;
            console.log('Correct');
        } else {
            wrongAnswers++;
            console.log('Incorrect');
        }   
    });

    // Question Eight
    $('#submit-button').on('click', function () {
        var value = $("[name=game-system]:checked").val();
        if(value === 'sega-dreamcast'){
            correctAnswers++;
            console.log('Correct');
        } else {
            wrongAnswers++;
            console.log('Incorrect');
        }   
    });

    // Question Nine
    $('#submit-button').on('click', function () {
        var value = $("[name=average-age]:checked").val();
        if(value === '35'){
            correctAnswers++;
            console.log('Correct');
        } else {
            wrongAnswers++;
            console.log('Incorrect');
        }   
    });

    // Question Ten
    $('#submit-button').on('click', function () {
        var value = $("[name=scoring]:checked").val();
        if(value === 'sonic-hedgehog'){
            correctAnswers++;
            console.log('Correct');
        } else {
            wrongAnswers++;
            console.log('Incorrect');
        }   
    });

    // End Game - Display Score - Display Modal
    $("#submit-button").on("click", function(){
        $("#end-game").css("display", "block");
        $("#loseCaption").text("You got " + wrongAnswers + " answers incorrect out of 10!");
        $("#winCaption").text("You got " + correctAnswers + " answers correct out of 10!");
        clearInterval(delayTimer);
    });
    
    // Clear Checked Answers - Reset Score - Close Modal
    $(".close").on("click", function(){
        $("#end-game").css("display", "none");
        $(".ghost").prop("checked", false);
        correctAnswers = 0;
        wrongAnswers = 0;
        $("#start-game").css("display", "block");
    });

    // End Game Modal
    // var submitButton = function(){
    //     $("#end-game").css("display", "block");
    //     $("#loseCaption").text("You got " + wrongAnswers + " answers incorrect out of 10!");
    //     $("#winCaption").text("You got " + correctAnswers + " answers correct out of 10!");
    // };
                
});


