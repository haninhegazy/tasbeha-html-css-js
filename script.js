let counterDisplay=document.getElementById("counterDisplay"),
    increaseBtn=document.getElementById("increaseButton"),
    resetBtn=document.getElementById("resetButton");
let count=0;
increaseBtn.addEventListener("click",()=>{
    count++;
    updateCounter();
})
resetBtn.addEventListener("click",()=>{
    count=0;
    updateCounter();
})
let updateCounter=()=>{
    counterDisplay.textContent=count;
};