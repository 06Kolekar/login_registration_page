/*const ln = document.querySelector("lg");
const sp = document.querySelector("reg");

const log = document.querySelector("log");
const sig = document.querySelector("sup");

log.addEventListener('click' , ()=>{
    sp.classList.remove("reg");
    ln.classList.add("lg");
});

sig.addEventListener('click' , ()=>{
    sp.classList.remove("lg");
    ln.classList.add("reg");
});*/

let log = document.getElementsByClassName("btn1");
let sup = document.getElementById("btn2");
let reg = document.getElementById("reg");
let lg = document.getElementById("lg");

btn1.onclick = function(){
    reg.style.visibility = "hidden";
    lg.style.visibility = "visible";
}

sup.onclick = function(){
    reg.style.visibility = "visible";
    lg.style.visibility = "hidden";
}