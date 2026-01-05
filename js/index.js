'use strict';

document.querySelector('.one').addEventListener('click' , function() {
    document.querySelector(".card").style.backgroundColor = "rgb(18, 32, 184)";
    document.querySelector(".circle").style.backgroundColor = "red";
    document.querySelector(".card2").style.backgroundColor = "rgb(23 0 106)";
    document.querySelector(".check").style.top = "35px";
})

document.querySelector('.two').addEventListener('click' , function() {
    document.querySelector(".card").style.backgroundColor = "green";
    document.querySelector(".circle").style.backgroundColor = "red";
    document.querySelector(".card2").style.backgroundColor = "rgb(48 90 37)";
    document.querySelector(".check").style.top = "72px";
})

document.querySelector('.three').addEventListener('click' , function() {
    document.querySelector(".card").style.backgroundColor = "rgba(230, 193, 6, 1)";
    document.querySelector(".circle").style.backgroundColor = "red";
    document.querySelector(".card2").style.backgroundColor = "rgb(171 156 0)";
    document.querySelector(".check").style.top = "111px";
})

document.querySelector('.four').addEventListener('click' , function() {
    document.querySelector(".card").style.backgroundColor = "rgba(16, 16, 16, 1)";
    document.querySelector(".circle").style.backgroundColor = "red";
    document.querySelector(".card2").style.backgroundColor = "rgb(99 99 99)";
    document.querySelector(".check").style.top = "150px";
})

document.querySelector('.five').addEventListener('click' , function() {
    document.querySelector(".card").style.backgroundColor = "red";
    document.querySelector(".circle").style.backgroundColor = "green";
    document.querySelector(".card2").style.backgroundColor = "rgb(162 33 33 / 97%)";
    document.querySelector(".check").style.top = "190px";
})
