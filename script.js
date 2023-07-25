const question = document.querySelector("#question");
const option = document.querySelectorAll(".option");
let correct = 0;
let wrong = 0;
let ca = [0, 0, 0, 0, 0, 0, 0];




const question1 = [
    {
        "que": "What is the capital of Marshmallow Land?",
        "a": "Chocolatetown",
        "b": "Fluffytown",
        "c": "Marshmallowopolis",
        "d": "Stickyville",
        "correctOption": "c",
        "correctAnswer": "Marshmallowopolis",
    },
    {
        "que": "What do you call a group of unicorns?",
        "a": "A dazzle",
        "b": "A giggle",
        "c": "A sparkle",
        "d": "A rainbow",

        "correctOption": "a",
        "correctAnswer": "A dazzle",
    },
    {
        "que": "Which planet is made entirely of cheese?",
        "a": "Mars",
        "b": "Venus",
        "c": "Moon",
        "d": "Cheesetopia",
        "correctOption": "d",
        "correctAnswer": "Cheesetopia",
    },
    {
        "que": "How do you catch a unique rabbit?",
        "a": "Unique up on it!",
        "b": "Use a magic net!",
        "c": "Befriend it with carrot cupcakes!",
        "d": "It's impossib le, they're too rare!",
        "correctOption": "a",
        "correctAnswer": "Unique up on it!",
    },
    {
        "que": "What do you get when you mix a dragon with a snowman?",
        "a": "A fire- breathing snowman",
        "b": "A snow - covered dragon",
        "c": "A puddle of melted snow",
        "d": "A dracoman",

        "correctOption": "c",
        "correctAnswer": "A puddle of melted snow",
    },
    {
        "que": "How many cookies can a cookie monster eat in one minute ?",
        "a": "10",
        "b": "100",
        "c": "All of them!",
        "d": "None, cookie  monsters don't exist!",
        "correctOption": "c",
        "correctAnswer": "All of them!",
    },
    {
        "que": "What's the best way to communicate with a friendly alien?",
        "a": "Learn their language through a telepathic connection",
        "b": "Send them an email in alien code",
        "c": "Use a universal translator app",
        "d": "Share a virtual dance - off with cosmic dance moves",
        "correctOption": "d",
        "correctAnswer": "Share a virtual dance - off with cosmic dance moves",
    }
]
let total = question1.length;
console.log(total)
let index = 0;
function loader() {
    if (index != total ) {
        reset();
    }
    

    if (index == 0) {
        document.getElementById("previous").style.display = "none";
    }
    if (index != 0) {
        document.getElementById("previous").style.display = "flex";
    }
    if (index != total - 1) {
        document.getElementById("next").style.display = "flex";
        document.getElementById("submit").style.display = "none";
    }



    const data = question1[index];
    question.innerText = `${index + 1}) ${data.que}`;
    option[0].nextElementSibling.innerText = `${data.a}`;
    option[1].nextElementSibling.innerText = `${data.b}`;
    option[2].nextElementSibling.innerText = `${data.c}`;
    option[3].nextElementSibling.innerText = `${data.d}`;

}

function next1() {

    const selectedOption = document.querySelector(
        'input[name="option"]:checked'
    );
    if (!selectedOption) return;

    const data = question1[index];
    if (selectedOption.value === data.correctOption) {
        ca[index] = 1;

    } else {
        ca[index] = 0;
    }





    index++;




    if (index != 0) {
        document.getElementById("previous").style.display = "flex";
    }
    if (index != total - 1) {
        document.getElementById("next").style.display = "flex";
    }
    if (index == total - 1) {
        document.getElementById("submit").style.display = "flex";
        document.getElementById("next").style.display = "none";
    }





    loader();



}

function previous1() {
    


    index--;
    if (index == 0) {
        document.getElementById("previous").style.display = "none";
    }
    if (index != 0) {
        document.getElementById("previous").style.display = "flex";
    }
    if (index != total - 1) {
        document.getElementById("next").style.display = "flex";
    }
    if (index == total - 1) {
        document.getElementById("submit").style.display = "flex";
        document.getElementById("next").style.display = "none";

    }
    loader();
}

function quizEnd() {

    question.innerHTML = `Thanks for Playing the Quiz <br> You got ${correct}/${total} marks`;
    document.querySelectorAll(".select")[0].style.display = "none";
    document.querySelectorAll(".select")[1].style.display = "none";
    document.querySelectorAll(".select")[2].style.display = "none";
    document.querySelectorAll(".select")[3].style.display = "none";

    document.getElementById("previous").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("correctAnswers").style.display = "flex";
    document.getElementById("startAgain").style.display = "flex";





}

function answers() {

    document.querySelector(".heading").innerHTML = `1) ${question1[0].correctAnswer} <br> 2) ${question1[1].correctAnswer} <br> 3) ${question1[2].correctAnswer} <br> 4) ${question1[3].correctAnswer} <br> 5)  ${question1[4].correctAnswer} <br> 6) ${question1[5].correctAnswer} <br> 7) ${question1[6].correctAnswer} `
    document.getElementById("correctAnswers").style.display = "none";
    document.getElementById("startAgain").style.display = "flex";
}

function again() {
    document.getElementById("startAgain").style.display = "none";
    document.getElementById("correctAnswers").style.display = "none";
    index = 0;
    correct = 0;
    wrong = 0;
    loader();
    document.querySelector(".heading").innerHTML = ``;
    document.querySelectorAll(".select")[0].style.display = "flex";
    document.querySelectorAll(".select")[1].style.display = "flex";
    document.querySelectorAll(".select")[2].style.display = "flex";
    document.querySelectorAll(".select")[3].style.display = "flex";


}





function reset() {
    option.forEach((input) => {
        input.checked = false

    }
    )
}

function notreset() {
    option.forEach((input) => {
        input.checked = true

    }
    )
}


document.getElementById("submit").addEventListener("click", () => {
    const selectedOption = document.querySelector(
        'input[name="option"]:checked'
    );
    if (selectedOption) {
        const data = question1[index];
        if (selectedOption.value === data.correctOption) {
            // correct++;
            ca[index] = 1;
        } else {
            ca[index] = 0;
        }
    }
    correct = ca[0] + ca[1] + ca[2] + ca[3] + ca[4] + ca[5] + ca[6];
    quizEnd();
});




loader();