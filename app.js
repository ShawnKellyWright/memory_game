document.addEventListener('DOMContentLoaded', () => {

    // Card options
    const cardArray = [
        {
            name: 'beets',
            img: 'images/beet.svg'
        },
        {
            name: 'beets',
            img: 'images/beet.svg'
        },
        {
            name: 'andy',
            img: 'images/andy1_100.png'
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
            name: 'michael',
            img: 'images/michael_scott_100.png'
        },
        {
            name: 'prisonMike',
            img: 'images/prison_Mike_100.png'
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
            name: 'cylon',
            img: 'images/cylon.svg'
        },
        {
            name: 'bear',
            img: 'images/bear.svg'
        },
        {
            name: 'bear',
            img: 'images/bear.svg'
        },
    ]
})

const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenId = []

//create Board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        // card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//Check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src')
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
