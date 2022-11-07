var video = document.getElementById('video'); 

function play() { 
    video.play(); 
}

// 
video.addEventListener('play', () => {
    video.setAttribute('controls', 'true');
});

// 
const btn = document.getElementById('playBtn');
const h1 = document.getElementById('vidText');

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    h1.style.display = 'none';
});

// 
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll('span');
for(let i = 0; i < element.length; i++){
    element[i].style.transform = "rotate("+i*17+"deg)";
}

