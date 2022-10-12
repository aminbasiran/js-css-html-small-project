// const elementNode =document.createElement('h3');
// const valueNode = document.createTextNode('this is another test run');
// const attrNode = document.createAttribute('class');
// attrNode.value= 'special';
// elementNode.appendChild(valueNode);
// elementNode.setAttributeNode(attrNode);
// document.body.appendChild(elementNode);


// let newNode= document.getElementById('plug').innerHTML;
// document.getElementById('demo').innerHTML=newNode;

const color=['red', 'lightblue','yellow','purple','blue', 'orange','pink', 'brown', 'maroon','gold'];

const btn = document.querySelector('#trialid');
btn.addEventListener('click', addPara);

function addPara(){
    const randNum = Math.floor(Math.random()*color.length );
    const saveNum = 'Your random number is: ' + randNum + ' with the color of ' + color[randNum];
    document.body.style.backgroundColor = color[randNum]
    document.getElementById('runtest').innerHTML=saveNum;
    // const newElement = document.createElement('h4');
    // const newInside = document.createTextNode(saveNum); // can change this -> newElement.textContent = saveNum;
    // newElement.appendChild(newInside);
    // document.body.appendChild(newElement);

};
    

const removebtn = document.getElementById('trialid2');
removebtn.addEventListener('click',removeItem);
function removeItem(){
    document.getElementById('runtest').innerHTML = "";
    document.body.style.backgroundColor = 'white';
}








