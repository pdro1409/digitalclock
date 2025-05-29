let digitalElement = document.querySelector('.digital')
let ps = document.querySelector('.p_s')
let pm = document.querySelector('.p_m')
let ph = document.querySelector('.p_h')



function updateClock(){
    let timer = new Date()
    let hours = timer.getHours()
    let minutes = timer.getMinutes()
    let seconds = timer.getSeconds()

    digitalElement.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`
    
    let sdeg = ((360 / 60) * seconds) - 90
    let mdeg = ((360 / 60) * minutes) - 90
    let hdeg = ((360 / 12) * hours) - 90
    ps.style.transform = `rotate(${sdeg}deg)`
    pm.style.transform = `rotate(${mdeg}deg)`
    ph.style.transform = `rotate(${hdeg}deg)`

}

function fixZero(time){
    return time < 10 ? `0${time}` : time
}
setInterval(updateClock, 1000)