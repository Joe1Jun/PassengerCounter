//initialize the count as 0 
//listen for clicks on the button
//increment the count varibale wwhen the button is pressed
//change the count-el in the Htmlto reflect the new count


// store variables outside of the function
//therfore everytime the function is called ie. the button is clicked
//the number is increased by one

//This line below is the DOM ie.Document Object Model.
//document is of the data type object.


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


let count = 0;

function increment() {

    count += 1;
    countEl.textContent = count;
    console.log(count);
    
    
}



function save() {

    let countStr = count + " - ";
    //figure out why space --- dont appear
    saveEl.textContent += countStr;
    let settoZero = 0;
    countEl.textContent = settoZero;

    
   
}