secPointer = document.querySelector(".second-pointer")
minPointer = document.querySelector(".minute-pointer")
hourPointer = document.querySelector(".hour-pointer")

secPointer.style.transform = "rotate(-90deg)"
minPointer.style.transform = "rotate(-90deg)"
hourPointer.style.transform = "rotate(-90deg)"

function getDate(){
    const now = new Date()
    let times =[]
    times.push(now.getSeconds())
    times.push(now.getMinutes())
    times.push(now.getHours())
    return times
}
getDate()

console.log(getDate());

setInterval(move,1)

function move(){
    const time = getDate()
    secPointer.style.transform = `rotate(${-90+time[0]*6}deg)`
    minPointer.style.transform = `rotate(${-90+time[1]*6+(time[0]/60)*6}deg)`
    hourPointer.style.transform = `rotate(${(-90+time[2]*30)+(time[1]/60)*30}deg)`
    
}
move()


