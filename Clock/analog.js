setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock()
{
    const currentDate = Date();
    const hoursRatio = (secondsRatio + currentDate.getHours())/12;
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;
    const secondsRatio = currentDate.getSeconds()/60;

    updateClock(hourHand, hoursRatio);
    updateClock(minuteHand, minutesRatio);
    updateClock(secondHand, secondsRatio);
}
function updateClock(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)
} 

setClock();

