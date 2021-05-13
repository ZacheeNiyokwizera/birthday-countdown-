// const countdown = () => {


//     const countDate = new Date("May 29, 2021 00:00:00").getTime();
//     const now = new Date().getTime();
//     console.log(now);
//     const gap = countDate - now;


//     if (timeDiff <= 0) {
//         clearTimeout(x);
//         document.write("Your Birthday is here!! Happy Birthday ! ");
//     }

//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     //calculate the time 
//     const textDay = Math.floor(gap / day);
//     const textHour = Math.floor((gap % day) / hour);
//     const textMinute = Math.floor((gap % hour) / minute);
//     const textSecond = Math.floor((gap % minute) / second);

//     document.querySelector(".day").innerHTML = textDay;
//     document.querySelector(".hour").innerHTML = textHour;
//     document.querySelector(".minute").innerHTML = textMinute;
//     document.querySelector(".second").innerHTML = textSecond;


// }
// setInterval(countdown, 1000);

const x = setInterval(() => {

    let seconds, minutes, hours, days, timeDiff, now, myBirthdayDate;

    myBirthdayDate = new Date("May 29, 2021 24:00:00");
    now = new Date();
    timeDiff = myBirthdayDate.getTime() - now.getTime();
    if (timeDiff <= 0) {
        clearTimeout(x);
        document.write(" Zack 😂... Your Birthday is here!! Happy Birthday 🎉! ");


    }

    seconds = Math.floor(timeDiff / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    days = Math.floor(hours / 24);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    document.querySelector(".day").innerHTML = days;
    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".minute").innerHTML = minutes;
    document.querySelector(".second").innerHTML = seconds;
}, 1000);