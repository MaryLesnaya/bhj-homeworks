let time = 59; 

const timer = setInterval(() => {
  document.getElementById('timer').textContent = time <= 0 
    ? clearInterval(timer) 
    : time--; 

    if(time <= 0) {
      alert("Вы победили в конкурсе!");
    }
}, 1000); 

