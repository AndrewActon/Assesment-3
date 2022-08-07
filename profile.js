const favColor = document.querySelector('#color')
const favPlace = document.querySelector('#place')
const favRitual = document.querySelector('#ritual')

function color(){
    alert('My favorite color is blue.')
}

function place(){
    alert('My favorite place is any mountain peak view.')
}

function ritual(){
    alert('My favorite ritual is a nice quiet hike in the mountains.')
}

favColor.addEventListener('click', color)
favPlace.addEventListener('click', place)
favRitual.addEventListener('click', ritual)