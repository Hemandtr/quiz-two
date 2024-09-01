
let quizData = [
    {
        question : "Most popular programing language?",
        a:"C++",
        b:"Python",
        c:"javascript",
        ans:"c"
    },
    {
      question : "What is the popular language used in data science",
      a:"C++",
      b:"Python",
      c:"javascript",
      ans:"b"
  },
  {
    question : "Which keyword is used to declare a variable in JavaScript? ",
    a:"all of these",
    b:"let",
    c:"var",
    ans:"a"

  }
]
 
//Get elements from DOM......
let title = document.querySelector('.title ')
let aLabel = document.querySelector('.aLabel')
let bLabel = document.querySelector('.bLabel')
let cLabel = document.querySelector('.cLabel')
let submitBtn = document.getElementById("submit");
let answers = document.querySelectorAll(".answer");
let quizNumber = 0
let score = document.getElementById("score");
let mark = 0;



//Task 1.
//Display UI.

function displayQuistionAnswers(){
  if (quizData.length > quizNumber) {
    title.innerHTML = quizData[quizNumber].question;
    aLabel.innerHTML = quizData[quizNumber].a;
    bLabel.innerHTML = quizData[quizNumber].b;
    cLabel.innerHTML = quizData[quizNumber].c;
  }
    score.innerHTML = "your score:"   + mark ;
}
//task 2
//Check submitted ans.........

function submitAnswer(){
    submitBtn.addEventListener("click",function(event){
      event.preventDefault
       //Task 3.......
       //Get user ans here......
      let userAnswer = getUserAnswer();
      if(userAnswer===quizData[quizNumber].ans){
        mark++;
        alert("yeee correct answer.Congratzzz...")
      }else{
        alert("you are clicked wrong ans.Please try again!!!!")
        mark = mark - .25;
        
      }
      quizNumber++;
      displayQuistionAnswers();
      

    })
}
// Get the user answer .......
function getUserAnswer(){
let userAnswer;
answers.forEach(function(answer){
   if(answer.checked===true){
    userAnswer=answer.id
   }

})
return userAnswer;

}
//Function involk.
displayQuistionAnswers();
submitAnswer();


//todo
//1. fix the issue
//2. add minus mark for wrong answers
//3. push this entire code to git
//4. add a congratulate screen at the end of the quiz11

//make a function 
//including a call back function .
//3

//fgdslfgvgdsg




