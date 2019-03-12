





var questionOne = $('#clyde').attr(true);
var questionTwo = $('#1982').attr(true);
var questionThree = $('#computer-space').attr(true);
var questionFour = $('#bowser-koopa').attr(true);
var questionFive = $('#tetris').attr(true);
var questionSix = $('#peach').attr(true);
var questionSeven = $('#mortal-kombat').attr(true);
var questionEight = $('#clyde').attr(true);
var questionNine = $('#clyde').attr(true);
var questionTen = $('#clyde').attr(true);
var correctAnswers = 0;
var wrongAnswers = 0;





    console.log("Would You LIke To Play A Game!");
    
$(document).ready(function () {


        $('#submit-button').on('click', function () {
            var value = $("[name=ghost]:checked").val();
            if(value === 'sue'){
                correctAnswers++;
                console.log('Correct');
            } else {
                wrongAnswers++;
                console.log('Incorrect');
            }            
        })
    

    
        $('#submit-button').on('click', function () {
            var value = $("[name=year]:checked").val();
            if(value === '1982'){
                correctAnswers++;
                console.log('Correct');
            } else {
                wrongAnswers++;
                console.log('Incorrect');
            }   
        })
   

   
        $('#submit-button').on('click', function () {
            var value = $("[name=arcade-game]:checked").val();
            if(value === 'computer-space'){
                correctAnswers++;
                console.log('Correct');
            } else {
                wrongAnswers++;
                console.log('Incorrect');
            }   
        })

        $('#submit-button').on('click', function () {
            var value = $("[name=character]:checked").val();
            if(value === 'bowser-koopa'){
                correctAnswers++;
                console.log('Correct');
            } else {
                wrongAnswers++;
                console.log('Incorrect');
            }   
        })

        $('#submit-button').on('click', function () {
            var value = $("[name=best-selling]:checked").val();
            if(value === 'tetris'){
                correctAnswers++;
                console.log('Correct');
            } else {
                wrongAnswers++;
                console.log('Incorrect');
            }   
        })

        $('#submit-button').on('click', function () {
            var value = $("[name=princess]:checked").val();
            if(value === 'peach'){
                correctAnswers++;
                console.log('Correct');
            } else {
                wrongAnswers++;
                console.log('Incorrect');
            }   
        })

        $('#submit-button').on('click', function () {
            var value = $("[name=mature-rating]:checked").val();
            if(value === 'mortal-kombat'){
                correctAnswers++;
                console.log('Correct');
            } else {
                wrongAnswers++;
                console.log('Incorrect');
            }   
        })

        $('#submit-button').on('click', function () {
            var value = $("[name=game-system]:checked").val();
            if(value === 'sega-dreamcast'){
                correctAnswers++;
                console.log('Correct');
            } else {
                wrongAnswers++;
                console.log('Incorrect');
            }   
        })

        $('#submit-button').on('click', function () {
            var value = $("[name=average-age]:checked").val();
            if(value === '35'){
                correctAnswers++;
                console.log('Correct');
            } else {
                wrongAnswers++;
                console.log('Incorrect');
            }   
        })

        $('#submit-button').on('click', function () {
            var value = $("[name=scoring]:checked").val();
            if(value === 'sonic-hedgehog'){
                correctAnswers++;
                console.log('Correct');
            } else {
                wrongAnswers++;
                console.log('Incorrect');
            }   
        })

        $('#submit-button').on('click', function () {
            alert("You got " + correctAnswers + " answers correct!");
            alert("You got " + wrongAnswers + " answers incorrect!");
            
        })

        

        

        

                
});


