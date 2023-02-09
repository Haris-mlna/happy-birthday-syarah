import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import number1 from '../assets/questionImg/number1.jpeg'
import number2 from '../assets/questionImg/number2.jpeg'
import number3 from '../assets/questionImg/number3.jpg'
import number4 from '../assets/questionImg/number4.jpeg'
import number5 from '../assets/questionImg/number5.jpeg'
import number6 from '../assets/questionImg/number6.jpeg'
import number7 from '../assets/questionImg/number7.jpeg'
import number8 from '../assets/questionImg/number8.jpeg'
import number9 from '../assets/questionImg/number9.jpg'
import number10 from '../assets/questionImg/number10.jpeg'


function Questioner() {
  const questions = [
    {
      image: number1,
      no: 1,
      question: "What is my Queen favourite food ? 🍕",
    },
    {
      image: number2,
      no: 2,
      question: "What is my Pancake favourite drink ? 🍼",
    },
    {
      image: number3,
      no: 3,
      question: "Guess what is my little girl hobbies 🎈",
    },
    {
      image: number4,
      no: 4,
      question: "Travelling Dream ? 🛫",
    },
    {
      image: number5,
      no: 5,
      question: "When is Mr.H and Ms.S anniversay? 💕",
    },
    {
      image: number6,
      no: 6,
      question: "TWhen is my cuttie pie birthday ? ✨",
    },
    {
      image: number7,
      no: 7,
      question: "What is my strawberry cupcake hates ? 😠",
    },
    {
      image: number8,
      no: 8,
      question: "who is the most beautiful woman in the world ? 🥰",
    },
    {
      image: number9,
      no: 9,
      question: "What is my little pancake love the most ? 😍",
    },
    {
      image: number10,
      no: 10,
      question: "morning routine ? 😍",
    },
  ];

  const answer = [
    {
      no: 1,
      A: "Ayam bakar",
      B: "Kupat tahu",
      C: "Nasi goyeng",
      D: "Seblak",
      correct: "A",
    },
    {
      no: 2,
      A: "Mixue",
      B: "Teh poci",
      C: "Kopi",
      D: "Susu",
      correct: "A",
    },
    {
      no: 3,
      A: "Main game",
      B: "Nonton drakor",
      C: "Tiduran",
      D: "Makan garem",
      correct: "C",
    },
    {
      no: 4,
      A: "Mekkah",
      B: "Paris",
      C: "Korea",
      D: "Swiss",
      correct: "D",
    },
    {
      no: 5,
      A: "13 January",
      B: "14 January",
      C: "10 January",
      D: "11 January",
      correct: "all",
    },
    {
      no: 6,
      A: "21 February",
      B: "24 January",
      C: "7 February",
      D: "Today 🥰",
      correct: "D",
    },
    {
      no: 7,
      A: "Cicak",
      B: "Kecoa",
      C: "Haris Maulana",
      D: "Es batu",
      correct: "C",
    },
    {
      no: 8,
      A: "My Bebe (Not yours but mine 🤗)",
      B: "Syarah Dzakiyah",
      C: "My cutiepies with honeybun and strawberry cupcakes",
      D: "my Queen",
      correct: "all",
    },
    {
      no: 9,
      A: "Haris Maulana",
      B: "Es Batu",
      C: "Mixue",
      D: "All of em (Except Haris)",
      correct: "D",
    },{
      no: 10,
      A: "Good Morning",
      B: "Hawo Papi",
      C: "moning",
      D: "ayafu ",
      correct: "D",
    },
  ];

  const navigate = useNavigate()

  const [questioner, setQuestioner] = useState(0);
  const [result, setResult] = useState(0);

  const [buttonDisableA, setButtonDisableA] = useState(false);
  const [buttonDisableB, setButtonDisableB] = useState(false);
  const [buttonDisableC, setButtonDisableC] = useState(false);
  const [buttonDisableD, setButtonDisableD] = useState(false);

  const nextQuestion = () => {
    if (questioner < 9) {
      setQuestioner((prev) => (prev += 1));
      console.log(questioner);
      if(questioner === 4) {
        Swal.fire(`It's actually 12 January :p`)
  
      }
    } else {
      localStorage.setItem('result', result)
      navigate('/result')
    }
  };

  const mutedAllbutton = (e) => {
    if (e === "A") {
      setButtonDisableB(true);
      setButtonDisableC(true);
      setButtonDisableD(true);
    } else if (e === "B") {
      setButtonDisableA(true);
      setButtonDisableC(true);
      setButtonDisableD(true);
    } else if (e === "C") {
      setButtonDisableA(true);
      setButtonDisableB(true);
      setButtonDisableD(true);
    } else if (e === "D") {
      setButtonDisableA(true);
      setButtonDisableB(true);
      setButtonDisableC(true);
    }
  };

  const Checker = (value) => {
    if (value === answer[questioner].correct) {
      setResult((prev) => (prev += 1));
    } else if (answer[questioner].correct === "all") {
      setResult((prev) => (prev += 1));
    } else {
      console.log(result);
    }
  };

  const answerPicked = (value) => {
    Checker(value);
  };

  const changeColorAnswer = (value) => {
    const buttonA = document.querySelector("#btnA");
    const buttonB = document.querySelector("#btnB");
    const buttonC = document.querySelector("#btnC");
    const buttonD = document.querySelector("#btnD");
    if (document) {
      if (value === "A") {
        buttonA.style.backgroundColor = '#59C3C3'
        buttonA.style.color = '#fff'
      } else if (value === "B") {
        buttonB.style.backgroundColor = '#59C3C3'
        buttonB.style.color = '#fff'
      } else if (value === "C") {
        buttonC.style.backgroundColor = '#59C3C3'
        buttonC.style.color = '#fff'
      } else if (value === "D") {
        buttonD.style.backgroundColor = '#59C3C3'
        buttonD.style.color = '#fff'
      } else if (value === "refresh") {
        buttonA.style.backgroundColor = '#fff'
        buttonB.style.backgroundColor = '#fff'
        buttonC.style.backgroundColor = '#fff'
        buttonD.style.backgroundColor = '#fff'
        buttonA.style.color = 'pink'
        buttonB.style.color = 'pink'
        buttonC.style.color = 'pink'
        buttonD.style.color = 'pink'
      }
    }
  };

  return (
    <div className="questioner">
      <div className="whiteboard">
        <span className="question-number">{questions[questioner].no}</span>
        <img src={questions[questioner].image} alt="myGirl" className="image-question" />
        <p className="question">{questions[questioner].question}</p>
      </div>
      <button
        className="answer-btn"
        disabled={buttonDisableA}
        id="btnA"
        onClick={() => {
          answerPicked("A");
          setButtonDisableA(true);
          mutedAllbutton("A");
          changeColorAnswer("A");
        }}
      >
        {answer[questioner].A} <span>A</span>
      </button>
      <button
        className="answer-btn"
        disabled={buttonDisableB}
        id="btnB"
        onClick={() => {
          answerPicked("B");
          setButtonDisableB(true);
          mutedAllbutton("B");
          changeColorAnswer("B");
        }}
      >
        {answer[questioner].B} <span>B</span>
      </button>
      <button
        className="answer-btn"
        disabled={buttonDisableC}
        id="btnC"
        onClick={() => {
          answerPicked("C");
          setButtonDisableC(true);
          mutedAllbutton("C");
          changeColorAnswer("C");
        }}
      >
        {answer[questioner].C} <span>C</span>
      </button>
      <button
        className="answer-btn"
        disabled={buttonDisableD}
        id="btnD"
        onClick={() => {
          answerPicked("D");
          setButtonDisableD(true);
          mutedAllbutton("D");
          changeColorAnswer("D");
        }}
      >
        {answer[questioner].D} <span>D</span>
      </button>

      <div>
        
        <button
        className="next-btn"
          onClick={() => {
            nextQuestion();
            setButtonDisableA(false);
            setButtonDisableB(false);
            setButtonDisableC(false);
            setButtonDisableD(false);
            changeColorAnswer("refresh");
            console.log(result);
          }}
        >
          {
            questioner < 9 && 'Next' || questioner === 9 && 'Done'
          }
        </button>
      </div>
    </div>
  );
}

export default Questioner;
