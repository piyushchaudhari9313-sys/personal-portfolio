  const QuizData = [
    {
      question:" Q. What does HTML stand for ?",
      a: "Hyper Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyperlinks Text Mark Language",
      d: "Hyper Tool Multi Language",
      correct: "a"
    },
    {
      question: "Q. What does CSS stand for?",
      a: "Creative Style Sheets",
      b: "Cascading Style Sheets",
      c: "Computer Style Sheets",
      d: "Colorful Style Sheets",
      correct: "b"
    },
      
    {
      question: "Q. Which language is used to make websites interactive?",
      a: "HTML",
      b: "CSS",
      c: "JavaScript",
      d: "Python",
      correct: "c"
    },
    {
      question: "Q. Which property is used in CSS to change text color?",
      a: "background-color",
      b: "font-color",
      c: "color",
      d: "text-style",
      correct: "c"
    },
    {
     question: "Q. What does JS stand for?",
     a: "Java Style",
     b: "JavaScript",
     c: "Just Script",
     d: "None of these",
     correct: "b"
}
  ];

  let question=document.getElementById("qns");
  let option1=document.getElementById("opt1");
  let option2=document.getElementById("opt2");
  let option3=document.getElementById("opt3");
  let option4=document.getElementById("opt4");
  let nextbtn=document.getElementById("next")

  let answers=document.querySelectorAll(".options")
  let num=0;
  let score=0;
  let myscore=document.querySelector(".myscore")
  question.innerHTML=QuizData[num].question;
  option1.innerHTML= QuizData[num].a;
  option2.innerHTML=QuizData[num].b;
  option3.innerHTML=QuizData[num].c;
  option4.innerHTML=QuizData[num].d;
   
  function checkAns(){
    let ans;
    answers.forEach(curelement => {
      if (curelement.checked){
        ans=curelement.value;
        console.log(ans);
      }
    });
    return ans;
  } 

  function next(){
    let checkedAns= checkAns();

    if(!checkedAns){
      alert("please select answer");
      return;
    }

    if(checkedAns == QuizData[num].correct){
      score++;
    }
    num++;
    if(num<QuizData.length){
  question.innerHTML=QuizData[num].question;
  option1.innerHTML=QuizData[num].a;
  option2.innerHTML=QuizData[num].b;
  option3.innerHTML=QuizData[num].c;
  option4.innerHTML=QuizData[num].d;

  } else{ 
     if(score === QuizData.length){
    myscore.innerHTML = `🎉 Congratulations! 🎉 <br/>
    You Scored ${score}/${QuizData.length} <br/><br/>
    <button onclick="location.reload()">Play Again</button>`;
  } else{
    myscore.innerHTML=`You Scored ${score}/${QuizData.length} <br/><br/>
    <button onclick="location.reload()">  Play Again</button>`
  
  } 
        nextbtn.style.display="none";

  }
  answers.forEach(el => el.checked = false);
  }           