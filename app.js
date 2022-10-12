const heading = document.getElementById("heading")
const subwrapper = document.getElementById("subwrapper")
const questionwrapper = document.getElementById("questionwrapper")
const start = document.getElementById("start")
const weiter_btn = document.getElementById("weiter_btn")
const question_element = document.getElementById("question_element")
const antwort_container = document.getElementById("antwort_container")
const score_element = document.getElementById("score")
const restart_container = document.getElementById("restart_container")


start.addEventListener("click", startQuiz);
weiter_btn.addEventListener("click", () => {
    current_index = current_index + 1
    setNextQuestion()
})

function startQuiz() {
    subwrapper.classList.add("hide")
    questionwrapper.classList.remove("hide")
    score_element.classList.remove("hide")

    mixed_questions = fragen.sort(() => Math.random() - .5)
    current_index = 0   
    showQuestion(mixed_questions[current_index])
}

function showQuestion(question) {
    weiter_btn.classList.remove("hide")
    weiter_btn.classList.add("blurred")
    weiter_btn.disabled = true

    question_element.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.classList.add("answer_btn")
        button.innerText = answer.text

        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        antwort_container.appendChild(button)

        button.addEventListener("click", selectAnswer)
      })
}

function selectAnswer(event) {
    const selectedAnswer = event.target
    if (selectedAnswer.dataset.correct)  {
        score_element.innerHTML = parseInt(score_element.innerHTML) + 1
        selectedAnswer.classList.add("correct")
        
        const answer_btn = document.getElementsByClassName("answer_btn")
        for (let i = 0; i < answer_btn.length; i++) {
            answer_btn[i].disabled = true;
        }

        for (let i = 0; i < answer_btn.length; i++) {
            if (!answer_btn[i].dataset.correct) {
                answer_btn[i].classList.add("blurred")
            }
        }

        weiter_btn.classList.remove("blurred")
        weiter_btn.disabled = false
        
    }
    else {
        selectedAnswer.classList.add("false")
        weiter_btn.classList.add("hide")

        const answer_btn = document.getElementsByClassName("answer_btn")
        for (let i = 0; i < answer_btn.length; i++) {
            answer_btn[i].disabled = true;
        }

        for (let i = 0; i < answer_btn.length; i++) {
            if (answer_btn[i].dataset.correct) {
                answer_btn[i].classList.add("correct")
            }
        }

        for (let i = 0; i < answer_btn.length; i++) {
            if (!answer_btn[i].dataset.correct && (answer_btn[i] != selectedAnswer)) {
                    answer_btn[i].classList.add("blurred")
            }
        }
      
        const restart = document.createElement("button")
        restart.classList.add("neustart")
        restart.innerText = "Neustart"
        restart.onclick = reloadPage
        restart_container.appendChild(restart)
    }
}


function setNextQuestion() {
    resetState()
    showQuestion(mixed_questions[current_index])
}


function resetState() {
    while (antwort_container.firstChild) {
        antwort_container.removeChild(antwort_container.firstChild)
    }
}

function reloadPage() {
    window.location.reload()
}



const fragen = [
    {
        question: "Wie viel Prozent der Erde sind von Wasser bedeckt?",
        answers: [
            { text: "65", correct: false},
            { text: "83", correct: false},
            { text: "71", correct: true},
            { text: "34", correct: false},
        ]
    },

    {
        question: "Wer wählt den Bundespräsidenten?",
        answers: [
            { text: "Bundekanzler", correct: false},
            { text: "Bundestag", correct: false},
            { text: "Volk", correct: false},
            { text: "Bundesversammlung", correct: true},
        ]
    },

    {
        question: "Was ist die Hauptstadt von Estland?",
        answers: [
            { text: "Oslo", correct: false},
            { text: "Kopenhagen", correct: false},
            { text: "Reykjavík", correct: false},
            { text: "Talinn", correct: true},
        ]
    },

    {
        question: "Wieviele Kontinente gibt es?",
        answers: [
            { text: "7", correct: true},
            { text: "4", correct: false},
            { text: "11", correct: false},
            { text: "8", correct: false},
        ]
    },

    {
        question: 'Welches Land hat die meisten Einwohner?',
        answers: [
            { text: "Russland", correct: false},
            { text: "Indien", correct: false},
            { text: "China", correct: true},
            { text: "USA", correct: false},
        ]
    },

    {
        question: "Was ist die Summe der Innenwinkel eines Dreiecks?",
        answers: [
            { text: "90", correct: false},
            { text: "360", correct: false},
            { text: "180", correct: true},
            { text: "100", correct: false},
        ]
    },

    {
        question: "Was ist die Wurzel aus 144?",
        answers: [
            { text: "11", correct: false},
            { text: "14", correct: false},
            { text: "9.5", correct: false},
            { text: "12", correct: true},
        ]
    },


    {
        question: "Was ist der höchste Berg Deutschlands?",
        answers: [
            { text: "Hochwanner", correct: false},
            { text: "Zugspitze", correct: true},
            { text: "Watzmann", correct: false},
            { text: "Biberkopf", correct: false},
        ]
    },

    {
        question: "Wie viele Zähne hat ein erwachsener Mensch?",
        answers: [
            { text: "26", correct: false},
            { text: "30", correct: false},
            { text: "48", correct: false},
            { text: "32", correct: true},
        ]
    },

    {
        question: "Welches Metall leitet Wärme am besten?",
        answers: [
            { text: "Gold", correct: false},
            { text: "Aluminium", correct: false},
            { text: "Silber", correct: true},
            { text: "Kupfer", correct: false},
    
        ]
    },

    {
        question: "In welcher Stadt befindet sich der Big Ben?",
        answers: [
            { text: "New York", correct: false},
            { text: "Manchester", correct: false},
            { text: "Miami", correct: false},
            { text: "London", correct: true},
        ]
    },

    {
        question: "In welchem Jahr wurde der Euro eingeführt?",
        answers: [
            { text: "2002", correct: true},
            { text: "2000", correct: false},
            { text: "1995", correct: false},
            { text: "2007", correct: false},
    
        ]
    },

    {
        question: "Wann endete der 2. Weltkrieg?",
        answers: [
            { text: "1945", correct: true},
            { text: "1940", correct: false},
            { text: "1952", correct: false},
            { text: "1942", correct: false},
    
        ]
    },

    {
        question: "Wie viele Bundesländer hat Deutschland?",
        answers: [
            { text: "18", correct: false},
            { text: "11", correct: false},
            { text: "16", correct: true},
            { text: "15", correct: false},
    
        ]
    },

    {
        question: "Wie viele Milchzähne bekommt ein Kind?",
        answers: [
            { text: "12", correct: false},
            { text: "35", correct: false},
            { text: "22", correct: false},
            { text: "20", correct: true},
        ]
    },

    {
        question: "Wie heißt die Hauptstadt von Thüringen?",
        answers: [
            { text: "Erfurt", correct: true},
            { text: "Wiesbaden", correct: false},
            { text: "Dresden", correct: false},
            { text: "Mainz", correct: false},
    
        ]
    },

    {
        question: "Was ist H2O?",
        answers: [
            { text: "Alkohol", correct: false},
            { text: "Sauerstoff", correct: false},
            { text: "Wasser", correct: true},
            { text: "Magnesium", correct: false},
    
        ]
    },

    {
        question: "Auf welchem Kontinent liegt die Wüste Sahara?",
        answers: [
            { text: "Asien", correct: false},
            { text: "Europa", correct: false},
            { text: "Afrika", correct: true},
            { text: "Australien", correct: false},
    
        ]
    },

    {
        question: "Wann ging der 1. Weltkrieg zu Ende?",
        answers: [
            { text: "1913", correct: false},
            { text: "1945", correct: false},
            { text: "1920", correct: false},
            { text: "1918", correct: true},
        ]
    },

    {
        question: "Wie heißt die Hauptstadt des US-Bundesstaats New York?",
        answers: [
            { text: "Albany", correct: true},
            { text: "Yonkers", correct: false},
            { text: "New York City", correct: false},
            { text: "Buffalo", correct: false},
    
        ]
    },

    {
        question: "Wie heißt das flächenmäßig kleinste Bundesland?",
        answers: [
            { text: "Berlin", correct: false},
            { text: "Bremen", correct: true},
            { text: "Hamburg", correct: false},
            { text: "Saarland", correct: false},
    
        ]
    },

    {
        question: "Welche Gürtelfarbe existiert im Kampfsport nicht?",
        answers: [
            { text: "rot", correct: true},
            { text: "schwarz", correct: false},
            { text: "weiß", correct: false},
            { text: "braun", correct: false},
    
        ]
    },

    {
        question: "Folgt man dem Äquator um die Welt, legt man wie viele Kilometer zurück?",
        answers: [
            { text: "rund 30.070 km", correct: false},
            { text: "rund 60.070 km", correct: false},
            { text: "rund 80.070 km", correct: false},
            { text: "rund 40.070 km", correct: true},
        ]
    },

    {
        question: "Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt?",
        answers: [
            { text: "Vögeln", correct: true},
            { text: "Affen", correct: false},
            { text: "Alligatoren", correct: false},
            { text: "Eidechsen", correct: false},
    
        ]
    },

    {
        question: "Wie heißt die Hauptstadt der Slowakei?",
        answers: [
            { text: "Prag", correct: false},
            { text: "Bratislava", correct: true},
            { text: "Sofia", correct: false},
            { text: "Ljubljana", correct: false},
    
        ]
    },

    {
        question: "In welcher Einheit wird Spannung gemessen?",
        answers: [
            { text: "Ampere", correct: false},
            { text: "Watt", correct: false},
            { text: "Volt", correct: true},
            { text: "Newton", correct: false},
    
        ]
    },

    {
        question: "Wo fanden die Olympischen Spiele 1996 statt?",
        answers: [
            { text: "Atlanta", correct: true},
            { text: "Turin", correct: false},
            { text: "Barcelona", correct: false},
            { text: "Los Angeles", correct: false},
        ]
    },

    {
        question: "Wie lautet das chemische Symbol für Blei?",
        answers: [
            { text: "Bl", correct: false},
            { text: "Pt", correct: false},
            { text: "Pb", correct: true},
            { text: "Be", correct: false},
        ]
    },

    {
        question: "Wie lautet die chemische Formel für Wasser?",
        answers: [
            { text: "H20", correct: true},
            { text: "Mg2", correct: false},
            { text: "CO2", correct: false},
            { text: "CA2", correct: false},
        ]
    },

    {
        question: "Wie viele Planeten hat unser Sonnensystem?",
        answers: [
            { text: "9", correct: false},
            { text: "8", correct: true},
            { text: "10", correct: false},
            { text: "11", correct: false},
        ]
    },

    {
        question: "In welchen Meer/Ozean liegt die Insel Hawaii?",
        answers: [
            { text: "Atlantischer Ozean", correct: false},
            { text: "Indischer Ozean", correct: false},
            { text: "Pazifischer Ozean", correct: true},
            { text: "Karibisches Meer", correct: false},
        ]
    },

    {
        question: "Wann fiel die Berliner Mauer?",
        answers: [
            { text: "3. Oktober 1990", correct: false},
            { text: "9. November 1989", correct: true},
            { text: "2. November 1990", correct: false},
            { text: "8. Oktober 1989", correct: false},
        ]
    },

    {
        question: "Welcher Ozean/Meer liegt zwischen Europa und Amerika?",
        answers: [
            { text: "Atlantlischer Ozean", correct: true},
            { text: "Indischer Ozean", correct: false},
            { text: "Karibisches Meer", correct: false},
            { text: "Pazifischer Ozean", correct: false},
    
        ]
    },

    {
        question: "Wie heißt die Zahl unter der Wurzel?",
        answers: [
            { text: "Kathete", correct: false},
            { text: "Hypotenuse", correct: false},
            { text: "Zähler", correct: false},
            { text: "Radikand", correct: true},
        ]
    },

    {
        question: "In welcher Einheit wird Kraft gemessen?",
        answers: [
            { text: "Joule", correct: false},
            { text: "Ohm", correct: false},
            { text: "Newton", correct: true},
            { text: "Ampere", correct: false},
        ]
    },
]







