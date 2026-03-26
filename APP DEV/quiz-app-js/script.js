
const choicesButton = document.querySelectorAll(".choices > button");
const questionElement = document.querySelector(".question");
const nextButton = document.querySelector(".next-btn");

const questions = [
    "1. What is the following used to output text in Python",
    "2. What symbol is used to start a comment in Python?",
    "3. Which data type is used to store text in most programming languages?",
    "4. Which of the following is a loop structure in Python?",
    "5. What does HTML stand for?"
];

const choices = [
    ["echo", "print", "console.log", "System.out.println"],
    ["//", "/*", "#", "--"],
    ["int", "float", "string", "bool"],
    ["repeat", "for", "switch", "case"],
    ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language", "HyperText Markdown Language"],
];

const answers = ["print", "#", "string", "for","HyperText Markup Language"]

let currentQuestion = 0;

const displayQuestions = (index) => {
    questionElement.textContent = questions[index];

    choicesButton.forEach((button, i) => {
        button.textContent = choices[index][i];
    });
};

const nextQuestion = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestions(currentQuestion);
    } else {
        alert("quiz done!")
    }

    choicesButton.forEach((button) => {
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });

};

nextButton.addEventListener("click", () => {
    nextQuestion();
});

displayQuestions(currentQuestion);

const validateAnswer = (userAnswer, button) => {
    if (userAnswer === answers[currentQuestion]) {
        button.classList.add("correct")
    } else if (userAnswer !== answers[currentQuestion]){
        button.classList.add("wrong");
    }
    
    choicesButton.forEach((button) => button.disabled = true);

}

choicesButton.forEach((button) => {
    button.addEventListener("click", () => {
        validateAnswer(button.textContent.trim(), button);
    });

});