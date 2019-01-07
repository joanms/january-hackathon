$( document ).ready(function() {
 var clock = document.getElementById("cd");
 var targetDate = new Date(2019, 12, 31); // Dec 31, 2019;
 
clock.innerHTML = targetDate.toString();
setInterval(function(){
  clock.innerHTML = targetDate.toString();
}, 1000);

});