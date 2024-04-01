const img = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
let number = 0;

img.onclick = function() {
    number++;
    counter.innerHTML = number;

    if(number % 2 === 0) {
        img.width = 300;
    }

    if(number % 2 !== 0) {
        img.width = 200;
    }
}
