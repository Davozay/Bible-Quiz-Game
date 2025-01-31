const questions = [
  {
    question: "Who was the oldest man in the Bible?",
    answers: [
      { text: "Noah", correct: false },
      { text: "Jehoachim", correct: false },
      { text: "Methuselah", correct: true },
      { text: "Samson", correct: false },
    ],
  },

  {
    question: "Who was Methuselah's son?",
    answers: [
      { text: "Lamech", correct: true },
      { text: "Jesus", correct: false },
      { text: "Korah", correct: false },
      { text: "Hamuel", correct: false },
    ],
  },
  {
    question: "Who was Jared?",
    answers: [
      { text: "Son of Seth", correct: false },
      { text: "Father of Enoch", correct: true },
      { text: "Father of Methuslah", correct: false },
      { text: "Son of Jared", correct: false },
    ],
  },
  {
    question: "Who was the oldest among Noah's sons?",
    answers: [
      { text: "Ham", correct: false },
      { text: "Jude", correct: false },
      { text: "Japheth", correct: true },
      { text: "Shem", correct: false },
    ],
  },
  {
    question: "Who was the fifth oldest man in the Bible?",
    answers: [
      { text: "Noah", correct: false },
      { text: "Joshua", correct: false },
      { text: "Adam", correct: false },
      { text: "Seth", correct: true },
    ],
  },
  {
    question: "Who was Kora?",
    answers: [
      { text: "Son of Naphthali", correct: false },
      {
        text: "The man that rebelled against Moses, whom, the ground opened up and swallowed",
        correct: true,
      },
      {
        text: "One of King Ahab's advisers, that told him not to listen to Elijah",
        correct: false,
      },
      { text: "One of David's mighty men", correct: false },
    ],
  },
  {
    question: "Who was Jonathan's son?",
    answers: [
      { text: "Mephibosheth", correct: true },
      { text: "Phitnah", correct: false },
      { text: "Jedidiah", correct: false },
      { text: "Abimelech", correct: false },
    ],
  },
  {
    question: "Who was the father-in-law of Joseph?",
    answers: [
      { text: "Potiphera", correct: true },
      { text: "King Onan", correct: false },
      { text: "Potipher of Achbeth", correct: false },
      { text: "King Solomon", correct: false },
    ],
  },
  {
    question: "Who was the priest of On in Egypt ?",
    answers: [
      { text: "King Onan", correct: false },
      { text: "Potipher of Achbeth", correct: false },
      { text: "Potiphera", correct: true },
      { text: "Ra", correct: false },
    ],
  },
  {
    question: "is Jesus actually God?",
    answers: [
      { text: "Yes, absolutely", correct: true },
      { text: "hmm, maybe", correct: false },
      { text: "No, he isn't", correct: false },
      { text: "I do not think so", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const StartQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";

  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextBtn.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};
const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
};
const showScore = () => {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "play Again";
  nextBtn.style.display = "block";
  // if(showScore < 5){
  //     display("oops")
  // }
};

const handleNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    StartQuiz();
  }
});
StartQuiz();
