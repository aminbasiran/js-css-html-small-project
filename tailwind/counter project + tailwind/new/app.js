const decreaseButton = document.getElementById('dec');
const resetButton = document.getElementById('res');
const increaseButton = document.getElementById('inc');
const value = document.getElementById('midone');
console.log(decreaseButton)

let count = 0;

decreaseButton.addEventListener('click',()=>{
    count--;
    value.textContent = count;
    if(count<0){
        value.style.color='red';
    }   
})

increaseButton.addEventListener('click',()=>{
    count++;
    value.textContent = count;
    if(count>0){
        value.style.color='green';
    }
})

resetButton.addEventListener('click',()=>{
    count=0;
    value.textContent = count;
    if(count==0){
        value.style.color='black';
    }
})




