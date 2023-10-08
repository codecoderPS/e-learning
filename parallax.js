let text=document.getElementById("text");
let left=document.getElementById("left");
let right=document.getElementById("right");
window.addEventListener('scroll',() =>{
    let value =window.scrollY
    text.style.marginTop=value*2.5+'px';
    left.style.left=value*0.5+'px';
    right.style.right=value*2.5+'px';

})