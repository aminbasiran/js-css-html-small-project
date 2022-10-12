
const digit =[0,1,2,3,4,5,6,7,8,9, "A","B","C", "D","E","F"]

const button = document.getElementById('trialid');
button.addEventListener('click', addnNum);
function addnNum(){
    let hex= "#"
    for (let i=0; i<6; i++){
        hex=hex + digit[Math.floor(Math.random()*digit.length)];
    }
    const saveNum = 'Your colour     is: ' + hex;
    document.getElementById('runtest').innerHTML=saveNum;
    document.body.style.backgroundColor=hex;
}

const newButton = document.querySelector('#trialid2');
newButton.addEventListener('click',function(){
    document.body.style.backgroundColor = 'white';
    document.getElementById('runtest').innerHTML="";

})


      