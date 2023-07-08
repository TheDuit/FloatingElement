var maxX = window.innerWidth ;
var maxY = window.innerHeight;
addEventListener('load', () => {
const elemToLeft =[
    {left: `${parseInt(document.getElementById('element').style.left)}px`},
    { left: `0px` },
    { left: `10px` },
    { left: `0px` },
    { left: `5px` },
    { left: `0px` },    
];
const elemToRight = [
    {left: `${parseInt(document.getElementById('element').style.left)}px`},
    { left: `${maxX-60}px` },
    { left: `${maxX-55}px` },
    { left: `${maxX-60 }px` },
    { left: `${maxX-50}px` },
    { left: `${maxX-60}px`},
];

const elemTiming = {
    duration: 550, 
    iterations: 1,
};

function moveX(evt) {
    if (evt.touches[0].clientY <= maxY && evt.touches[0].clientY > 0) {
        document.getElementById('element').style.top = `${evt.touches[0].clientY}px`;
    }
}

function moveY(evt) {
    if (evt.touches[0].clientX <= maxX && evt.touches[0].clientX > 0) {
        document.getElementById('element').style.left = `${evt.touches[0].clientX - 30}px`;
    }
}
    document.getElementById('element').addEventListener('touchmove', (evt) => {
        evt.preventDefault();
        moveX(evt);
        moveY(evt);
    })
    document.getElementById('element').addEventListener('touchend', () => {
        if (parseInt(document.getElementById('element').style.left) > window.innerWidth / 2) {
            document.getElementById('element').animate(elemToRight, elemTiming).onfinish=()=>{document.getElementById('element').style.left = `${window.innerWidth - 60}px`};
        }
        else {
            document.getElementById('element').animate(elemToLeft, elemTiming).onfinish=()=>{document.getElementById('element').style.left = "0px"};
        }
    })
})