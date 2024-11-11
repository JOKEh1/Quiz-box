const quizData = [
  {
    question: "How old is Jude?",
    a: "23",
    b: "24",
    c: "25",
    d: "26",
    e: "22",
    correct: "a",
  },
  {
    question: "where is the main capital of Nigeria?",
    a: "Lagos",
    b: "Abuja",
    c: "Kano",
    d: "Enugu",
    e: "Ibadan",
    correct: "a",
  },
  {
    question: 'Where did the food "Ewa-goyin" come from?',
    a: "Ibadan",
    b: "Ogun",
    c: "Kogi",
    d: "Lagos",
    e: "Osun",
    correct: "d",
  },
  {
    question: "Which year was UNN inaugurated?",
    a: "1960",
    b: "1959",
    c: "1961",
    d: "1962",
    e: "1958",
    correct: "a",
  },
  {
    question: "who was the best president Nigeria ever had?",
    a: "Mohhammadu Buhari",
    b: "Goodluck Jonathan",
    c: "Bola Ahhmed Tinubu",
    d: "Shehu Shegari",
    e: "Olusegun Obasanjo",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;

  currentQuiz++;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;

  if (currentQuiz < quizData.lenght) {
    loadQuiz();
  } else {
  }

  loadQuiz();
});
