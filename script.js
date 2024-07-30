const words = ["Hello buddy 😍✌...", "Thank you for visiting ❤...", "Welcome to my website 🌹...", "😃...", "Contact me...",];
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
        counter = setTimeout(loopTyping, 100);
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
        counter = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
};
typeNow();


const currantDate = new Date();
setInterval(() => {
    document.getElementById('year').innerText = currantDate.getFullYear() - 2023;
    document.getElementById('month').innerText = currantDate.getMonth();
    document.getElementById('day').innerText = currantDate.getDate();
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const techItems = document.querySelectorAll('.tech-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');

            techItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});


var btn = $('#toTopButton');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});