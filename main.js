let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let num=document.querySelector("#num")
let counter=0;

btn1.addEventListener("click", function() {
    counter--;
    counterStyle()
})

btn2.addEventListener("click", function() {
    counter++;
    counterStyle();
})

function color() {
    if (counter > 0) {
        num.style.color= "#97ffc0"
    }else if(counter < 0) {
        num.style.color="red"
    }else{
        num.style.color="#232323"
    }
}

function counterStyle(params) {
    color();
    num.textContent = counter;
}