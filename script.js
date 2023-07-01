const words = ["Hello buddy 😍✌...", "Welcome to my website 🌹...", "This is my personal website 😃...","Thank you for visiting ❤...","Contact me...",];
let i = 0;
let counter;
function typeNow() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            document.getElementById('text').innerHTML += word.shift();
        } else {
            deleteNow();
            return false;
        };
        counter = setTimeout(loopTyping, 200);
    };
    loopTyping();
};
function deleteNow() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.getElementById('text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            }
            else {
                i = 0;
            };
            typeNow();
            return false;
        };
        counter = setTimeout(loopDeleting, 200);
    };
    loopDeleting();
};
typeNow();


const currantDate = new Date();
setInterval(() => {
    document.getElementById('year').innerText = currantDate.getFullYear() - 2022;
    document.getElementById('month').innerText = currantDate.getMonth();
    document.getElementById('day').innerText = currantDate.getDate();
}, 1000);