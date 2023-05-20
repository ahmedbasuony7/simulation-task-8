// Trafic light  

let car = document.querySelector('.my-div')
var button = document.querySelector('.btn .start');

function changeLight() {
    var redLight = document.querySelector('.light.red');
    var yellowLight = document.querySelector('.light.yellow');
    var greenLight = document.querySelector('.light.green');

    if (redLight.style.backgroundColor === 'red') {
        redLight.style.backgroundColor = 'black';
        yellowLight.style.backgroundColor = 'yellow';
        car.classList.remove('move');
    } else if (yellowLight.style.backgroundColor === 'yellow') {
        yellowLight.style.backgroundColor = 'black';
        greenLight.style.backgroundColor = 'green';
        car.classList.add('move');
    } else if (greenLight.style.backgroundColor === 'green') {
        greenLight.style.backgroundColor = 'black';
        redLight.style.backgroundColor = 'red';
        car.classList.remove('move');

    } else {
        redLight.style.backgroundColor = 'red';
        yellowLight.style.backgroundColor = 'black';
        greenLight.style.backgroundColor = 'black';
    }
    
}

setInterval(changeLight, 6000); 




// the timer 
var timerEl = document.getElementById('timer');

var timeLeft = 6;

var countdownInterval = setInterval(function() {
    timeLeft--;

    timerEl.innerHTML = timeLeft;

    if (timeLeft === 0) {
    clearInterval(countdownInterval);
    timerEl.classList.add('display-none')
    }
}, 1000);
