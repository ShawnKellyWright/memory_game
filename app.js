document.addEventListener('DOMContentLoaded', () => {

    // Card options
    const cardArray = [{
            name: 'beet',
            img: 'images/beet.svg'
        },
        {
            name: 'andy',
            img: 'images/andy1_100.png'
        },
        {
            name: 'michael',
            img: 'images/michael_scott_100.png'
        },
        {
            name: 'prisonMike',
            img: 'images/prison_Mike_100.png'
        },
        {
            name: 'cylon',
            img: 'images/cylon.svg'
        },
        {
            name: 'bear',
            img: 'images/bear.svg'
        },
        {
            name: 'beet',
            img: 'images/beet.svg'
        },
        {
            name: 'andy',
            img: 'images/andy1_100.png'
        },
        {
            name: 'michael',
            img: 'images/michael_scott_100.png'
        },
        {
            name: 'prisonMike',
            img: 'images/prison_Mike_100.png'
        },
        {
            name: 'cylon',
            img: 'images/cylon.svg'
        },
        {
            name: 'bear',
            img: 'images/bear.svg'
        }
    ]


    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //following test random quote generator test 
    var quotes = ['Before I do anything I ask myself, "Would an idiot do that?" And if the answer is yes, I do not do that thing.',
        'Who let the lemon-head into the room? You are a waste of life, and you should give up.',
        'Why are you the way that you are? Honestly, every time I try to do something fun or exciting, you make it not that way.'
    ]

    function newQuote() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
    }

    //create Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank_100.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You play like Michael Scott, a winner! You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank_100.png')
            cards[optionTwoId].setAttribute('src', 'images/blank_100.png')
            alert('Sorry, but you play like Toby Flenderson. Try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found all of Scranton!'
        }
    }

    //Flip your card
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})



//following test random quote generator test 
// var quotes = ['Before I do anything I ask myself, "Would an idiot do that?" And if the answer is yes, I do not do that thing.',
//    'Who let the lemon-head into the room? You are a waste of life, and you should give up.',
//    'Why are you the way that you are? Honestly, every time I try to do something fun or exciting, you make it not that way.'
// ]

// function newQuote() { 
// var randomNumber = Math.floor(Math.random() * (quotes.length));
// } 