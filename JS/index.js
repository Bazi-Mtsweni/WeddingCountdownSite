const countdown = () => {
  const countDate = new Date("October 30, 2021 00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //Calculate the time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //Get the exact values remaining
  const dayText = Math.floor(gap / day);
  const hourText = Math.floor((gap % day) / hour);
  const minuteText = Math.floor((gap % hour) / minute);
  const secondText = Math.floor((gap % minute) / second);

  if (secondText < 10) {
    document.querySelector(".seconds").innerText = "0" + secondText;
  } else {
    document.querySelector(".seconds").innerText = secondText;
  }
  if (minuteText < 10) {
    document.querySelector(".minutes").innerText = "0" + minuteText;
  } else {
    document.querySelector(".minutes").innerText = minuteText;
  }
  if (hourText < 10) {
    document.querySelector(".hours").innerText = "0" + hourText;
  } else {
    document.querySelector(".hours").innerText = hourText;
  }
  if (dayText < 10) {
    document.querySelector(".days").innerText = "0" + dayText;
  } else {
    document.querySelector(".days").innerText = dayText;
  }
  

  if (hourText === 14 && secondText > 58) {
    Push.create("10 Days Left", {
        icon: "/Images/Untitled-1.png",
      body: "Thabiso & Thandeka get married in 10 days!! Join them on their special day💍",
      requireInteraction: true
    });
    
  }
};
setInterval(countdown, 1000);





