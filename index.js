"use strict";



const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");
const modal = document.querySelector(".modal");
const modalh1 = document.querySelector(".modalh1");
const modalp = document.querySelector(".modalp");
const modalboton = document.querySelector(".modalboton");
const levelInst = document.querySelector(".levelInst");
levelInst.innerHTML = "Drop the ball between 80 and 100";
const l1 = document.getElementById("#l1");
const l2 = document.getElementById("#l2");
const l3 = document.getElementById("#l3");
const l4 = document.getElementById("#l4");



const counter = document.querySelector(".counter");
let numberConsole = 0;
let numberDocument = 0;

circulo.addEventListener("dragstart",()=>{
    numberConsole = numberDocument;
    
});

circulo.addEventListener("drag",()=>console.log(numberConsole++));

const actualizarCounter = function () {
    counter.innerHTML = numberConsole
}

setInterval(actualizarCounter, 50);

const showToHide = ()=>{
    modal.classList.remove("show");
    modal.classList.add("hide");
    console.clear();
}

const hideToShow = ()=>{
    modal.classList.remove("hide");
    modal.classList.add("show");
    console.clear();
}

const memoLevel4True = () =>{
    hideToShow();
    modalh1.innerHTML = `You are amazing`;
    modalp.innerHTML = `Go for a beer. You deserve it!`;
    modalboton.innerHTML = `Drink Beer`;
    modalboton.addEventListener("click",()=>{
        showToHide();
        numberConsole = 0;
        levelInst.innerHTML = "Go for a Beer or hit 100 again!";
    })
}

const memoLevel4False = () =>{
    hideToShow();
    modalh1.innerHTML = `Don't give up`;
    modalp.innerHTML = `This is so fucking difficult Bro, but you can do it!!! `;
    modalboton.innerHTML = `Let's do it!`;
    modalboton.addEventListener("click",()=>{
        showToHide();
    })    
}

/*LEVEL 4*/
const levelCuatroGame = function (){
    circulo.addEventListener("dragend",()=>{
        if(numberConsole == 100){
            memoLevel4True();
        }else{
            memoLevel4False();
        }
    })
}
/* LEVEL 3 */
const levelTresGame = function (){
    circulo.addEventListener("dragend",()=>{
        if(numberConsole>95 && numberConsole < 100){
            hideToShow();
            modalh1.innerHTML = `Puuf! One level to go!`;
            modalp.innerHTML = `You are so close to win!`;
            modalboton.innerHTML = `GO!`;
            modalboton.addEventListener("click",()=>{
                showToHide();
                numberConsole = 0;
                levelInst.innerHTML = "Drop the ball at 100";
                l3.classList.remove("levelActive");
                l4.classList.add("levelActive");
                levelCuatroGame();
            })
        }else{
            hideToShow();
            modalh1.innerHTML = `No... :(`;
            modalp.innerHTML = `Don't give up! You are so close`;
            modalboton.innerHTML = `Try Again`;
            modalboton.addEventListener("click",()=>{
                showToHide();
            })
        }
    });
}

/* LEVEL 2 */
const levelDosGame = function (){
    circulo.addEventListener("dragend",()=>{
        if(numberConsole>90 && numberConsole < 100){
            hideToShow();
            modalh1.innerHTML = `Congratulations`;
            modalp.innerHTML = `You are doing very good at this!`;
            modalboton.innerHTML = `Jump to level 3`;
            modalboton.addEventListener("click",()=>{
                showToHide();
                numberConsole = 0;
                levelInst.innerHTML = "Drop the ball between 95 and 100";
                l2.classList.remove("levelActive");
                l3.classList.add("levelActive");
                levelTresGame();
            })
        }else{
            hideToShow();
            modalh1.innerHTML = `No... :(`;
            modalp.innerHTML = `You will acheive it next time!`;
            modalboton.innerHTML = `Try Again`;
            modalboton.addEventListener("click",()=>{
                showToHide();
            })
        }
    });
}

/* LEVEL 1 */ 
circulo.addEventListener("dragend",()=>{
    if(numberConsole>80 && numberConsole < 100){
        hideToShow();
        modalh1.innerHTML = `My Hero :)`;
        modalp.innerHTML = `You are ready for Level 2`;
        modalboton.innerHTML = `GO!`;
        modalboton.addEventListener("click",()=>{
            showToHide();
            numberConsole = 0;
            levelInst.innerHTML = "Drop the ball between 90 and 100";
            l1.classList.remove("levelActive");
            l2.classList.add("levelActive");
            levelDosGame();
        })
        
    }else{
        hideToShow();
        modalh1.innerHTML = `No... :(`;
        modalp.innerHTML = `You will acheive it next time!`;
        modalboton.innerHTML = `Try Again`;
        modalboton.addEventListener("click",()=>{
            showToHide();
        })
    }
});









