// Code By Alireza Bayat
const display = document.querySelector(".display");
const showdisplay = document.querySelectorAll(".show-display");
showdisplay.forEach(item => {
    item.addEventListener("click", event => {
        const x = event.target.innerText;
        if (display.innerHTML == 0) {
            return display.innerHTML = x;
        }
        return display.innerHTML += x;
    });
});
document.querySelector(".calculate").addEventListener("click", event => {
    const numbers = display.innerHTML;
    return display.innerHTML = eval(numbers);
});
document.querySelector(".all-clear").addEventListener("click", event => {
    return display.innerHTML = 0;
});
document.querySelector(".clear-last").addEventListener("click", event => {
    let text = display.innerHTML;
    if(text.length === 1){
        return display.innerHTML = 0;
    }else{
        return display.innerHTML = text.substring(0, text.length -1);
    }
});
