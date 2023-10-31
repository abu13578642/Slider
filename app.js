"use strict";

let slider = document.querySelectorAll(".slider")
let left = document.querySelectorAll(".fa-angle-left")
let right = document.querySelectorAll(".fa-angle-right")
let line = document.querySelectorAll(".line")

let index = 1

fubi(index)

function fubi(e) {
    for (let i = 0; i < slider.length; i++) {
         slider[i].style.display = "none"
        
    }
    if(e > slider.length){
        index=1
    }

    if(e < 1){
        index=slider.length
    }
    slider[index - 1].style.display = "block"
    
    for (let i = 0; i < line.length; i++) {
        line[i].className = line[i].className.replace("active" , "");   
    }
    line[index - 1].className += "active"
}

function slidernext(e) {
    fubi(index += e)
}
function nextBtn(e) {
    fubi(index = e)
}


























































































































































//     nextSlider(index)
   
// function nextSlider(e) {
//     if (e < 1) {
//         slider = slider.length;
//     } else if(e > slider.length) {
//         index = 1;
//     }
//     for (let i = 0; i < slider.length; i++) {
//         slider[i].style.display = "none"
//    } 
//    for (let i = 0; i < line.length; i++) {
//     line[i].classList.remove("active");

// } 
// slider[i.index - 1].style.display = "block"
// line[index - 1].classList.add("active")
 
// }











