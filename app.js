let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".second");
let meridiem = document.querySelector(".meridiem");

// console.log(meridiem.textContent);

function clockTime (){
    let time = new Date();
    let hour= time.getHours();
    let minute = time.getMinutes();
    let second= time.getSeconds();

    if (hour > 12){
        hour -= 12;
        meridiem.textContent = "PM";
    }
    hours.textContent = (hour+"").padStart(2, "0");
    minutes.textContent = (minute+"").padStart(2, "0");
    seconds.textContent = (second+"").padStart(2, "0");

}
clockTime()
setInterval(clockTime, 1000)