const quizData = [
    {
        question: "O que é uma estrutura de condição ?",
        a: "É uma estrutura que existe apenas no Javascript.",
        b: "É um recurso que as linguagens de programação nos fornecem para que possamos escrever um código que seja executado  apenas sobre determinada condição.",
        c: "É um recurso que as linguagens de programação nos fornecem para que possamos escrever um código que seja executado sob qualquer condição.",
        d: "É uma estrutura que nunca se repete.",
        correct: "b",
    },
    {
        question: "Como se começa uma estrutura condicional?",
        a: "IF, ELSE",
        b: "ELSE, IF",
        c: "ELIF, IF",
        d: "ELIF, ELSE",
        correct: "a",
    },
    {
        question: "Como utilizamos a estrutura condicional 'if' no JavaScript?",
        a: "Usamos a palavra IF seguida de uma variável",
        b: "Usamos apenas a palavra IF.",
        c: "Utilizamos a palavra IF seguido de uma variável e uma condição.",
        d: "Utilizamos a palavra IF seguido de uma condição.",
        correct: "c",
    },
    {
        question: "Como utilizamos a estrutura condicional 'else' no JavaScript?",
        a: "Utilizamos a palavra ELSE seguido de uma condição.",
        b: "Utilizamos a palavra ELSE seguida de uma variável e uma condição.",
        c: "Usamos a palavra ELSE seguida de uma variável",
        d: "Usamos apenas a palavra ELSE.",
        correct: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você respondeu ${score}/${quizData.length} questões corretamente</h2>
           <button onclick="location.reload()">Recomeçar</button>
           `
       }
    }
})