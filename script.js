/*Add your JavaScript here*/

//question types Score clasification
var athenaScore = 0;
var aresScore = 0;
var hadesScore = 0;
var demeterScore = 0;

var questionCount =0;

var result = document.getElementById("result");
var restart = document.getElementById("restart")

//Amount of questioins Answered =0;

//Athena Answers
var q1a1 = document.getElementById("q1a1");
var q2a1 = document.getElementById("q2a1");
var q3a2 = document.getElementById("q3a2");

//Ares Answers
var q1a2 = document.getElementById("q1a2");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");

//Hades Answers
var q1a4 = document.getElementById("q1a4");
var q2a3 = document.getElementById("q2a3");
var q3a4 = document.getElementById("q3a4");

//Demeter Answers
var q1a3 = document.getElementById("q1a3");
var q2a2 = document.getElementById("q2a2");
var q3a3 = document.getElementById("q3a3");

//when click on the Answers occurres it cuases an action

restart.addEventListener("click", reQuiz);

//Athena Answers
q1a1.addEventListener("click", athena);
q2a1.addEventListener("click", athena);
q3a2.addEventListener("click", athena);

//Ares Answers
q1a2.addEventListener("click", ares);
q2a4.addEventListener("click", ares);
q3a1.addEventListener("click", ares);

//Hades Answers
q1a4.addEventListener("click", hades);
q2a3.addEventListener("click", hades);
q3a4.addEventListener("click", hades);

//Demeter Answers
q1a3.addEventListener("click", demeter);
q2a2.addEventListener("click", demeter);
q3a3.addEventListener("click", demeter);

//GODLY Functions

function athena() {
  athenaScore += 1;
  questionCount += 1;

  console.log("questionCount= " + questionCount + " Athena= " + athenaScore);

  if(questionCount==3){
    console.log("Quiz done!")
  }

  updateResult();
  
  }

function ares() {
  aresScore += 1;
  questionCount += 1;

  console.log("questionCount= " + questionCount + " Ares= " + aresScore);

  if(questionCount==3){
    console.log("Quiz done!")
  }

  updateResult();
}

function hades() {
  hadesScore += 1;
  questionCount += 1;

  console.log("questionCount= " + questionCount +" Hades= " + hadesScore);

  if(questionCount==3){
    console.log("Quiz done!")
  }

  updateResult();
}

function demeter() {
  demeterScore += 1;
  questionCount += 1;

  console.log("questionCount= "+ questionCount + " Demeter= " + demeterScore);

  if(questionCount==3){
    console.log("Quiz done!")
  }

  updateResult();
}

//Results!!

 function updateResult (){
   if (athenaScore>= 2){
     console.log("Athena");
     result.innerHTML="Athena";
   } else if (athenaScore == 1 && aresScore == 1 && hadesScore == 1 ){
     console.log("You have too many characteristics: Hades, Athena && Ares");
     result.innerHTML="You have too many characteristics: Hades, Athena && Ares";
   }else if (athenaScore == 1 && aresScore == 1 && demeterScore == 1 ){
     console.log("You have too many characteristics: Demeter, Athena && Ares");
     result.innerHTML="You have too many characteristics: Demeter, Athena && Ares";
   }else if (athenaScore == 1 && demeterScore == 1 && hadesScore == 1 ){
     console.log("You have too many characteristics: Hades, Athena && Demeter");
     result.innerHTML="You have too many characteristics: Hades, Athena && Demeter";
   }
  
  if (aresScore>= 2){
     console.log("Ares");
     result.innerHTML="Ares";
   }else if (aresScore == 1 && hadesScore == 1 && demeterScore == 1){
     console.log("You have too many characteristics: Hades, Demeter && Ares");
     result.innerHTML="You have too many characteristics: Hades, Demeter && Ares";
   }

  if (hadesScore>= 2){
     console.log("Hades");
     result.innerHTML="Hades";
   }

  if (demeterScore>= 2){
     console.log("Demeter");
     result.innerHTML="Demeter";
   }
 }

 function reQuiz(){
   athenaScore = 0;
   aresScore = 0;
   hadesScore = 0;
   demeterScore = 0;
   
   questionCount =0;

   result.innerHTML="Your result is...";
 }