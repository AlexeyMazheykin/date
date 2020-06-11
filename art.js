let h1 = document.getElementById('h1');
let p = document.getElementById('date');

let display = function () {
    setInterval(displayDate, 50);
   
    setTimeout (changeColor, 5000);
};



let displayDate = function () {
    p.innerHTML = Date();
}
let changeColor = function () {
    h1.style.color = 'red';
}

h1.onclick = display;