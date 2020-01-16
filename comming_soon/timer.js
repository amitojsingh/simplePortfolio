var countDownDate = new Date("Jan 5,2019 15:37:25").getTime();
var x = setInterval(function(){
  var now= new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance/ (1000*60*60*24));
  var hours = Math.floor((distance % (1000*60*60*24))/ (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000*60))/1000);

  document.getElementById("timer-days").innerHTML=days+"<p class=days>Days</p>";
  document.getElementById("timer-hours").innerHTML = hours+"<p class=hours>Hours</p>";
  document.getElementById("timer-minutes").innerHTML=minutes+"<p class=minutes>Minutes</p>";
  document.getElementById("timer-seconds").innerHTML=seconds+"<p class= seconds>Seconds</p>";
  if (distance<0){
    clearInterval(x);
    document.getElementById("timer").innerHTML= "Expired";
  }

},1000);
