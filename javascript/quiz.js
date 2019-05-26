var imageBox = $(".image-block");
var i = 0;
var images = Array("images/drstrange.jpg",
                   "images/hulk.jpg",
                   "images/kep10.jpg",
                   "images/kep12.jpg",
                   "images/kep13.jpg",
                   "images/kep14.jpg",
                   "images/kep21.jpg",
                   "images/kep2.jpg");

setInterval(function(){
    if(i>=images.length-1){
        i=0;
    }
    else{
        i++;
    }
     $(imageBox).animate({
            opacity:0
        },400,function(){
            $(imageBox).animate({
                opacity:1
            },500);
            $(imageBox).css("background-image","url("+images[i]+")");
        })
        
},15000);
var questions = $(".quiz-box"); var N=0;
function nextQuiz(){
   
    $(questions[N]).removeClass("active").addClass("unactive");
    $(questions[N+1]).removeClass("unactive").addClass("active");
    N++;
    console.log(N+". kérdés")
    if(N>=10){
        $(".game-end").removeClass("unactive").addClass("active")
    }
}

function quizLogic(){
    var correctAnswers = Array("answer4",
                               "answer5",
                               "answer10",
                               "answer16",
                               "answer19",
                               "answer25","answer27","answer31","answer34","answer41");
            
    var correctAnswersText = Array("answerText4",
                               "answerText5",
                               "answerText10","answerText16","answerText19","answerText25","answerText27","answerText31","answerText34","answerText41");                           
    var score = 0; var i=0;
    var answers = $(".answers");
    $(".answers").click(function(event){
       
      while(i<correctAnswers.length){
          if(event.target.id == correctAnswers[i] || event.target.id == correctAnswersText[i]){
            score++;  
            $("#score").text(score);
            $("#"+event.target.id).closest("div").css("background-color","green");
            i++;
            break;
        }
        else{
            $("#"+event.target.id).closest("div").css("background-color","red");
            i++;
            break;
        }
        
      }

        if(score>7){
            $("#score").css("color","green");
        }
        else if(score<7 && score >4){
            $("#score").css("color","orange");
        }
        else if(score<4){
            $("#score").css("color","red");
        }


      
     setTimeout("nextQuiz()",3000)
        
      })
      
}


quizLogic()
    

