// console.log("hello");

// document.querySelectorAll('.slot .value');


let value1 = document.getElementById("value1");

let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");

let values = [
    '😃', '😇', '😋', '😂', '😎', '😭', '😡'
]

function getRandom() {
    return values[parseInt(Math.random() * 7)]
}

let animationId;
let x=0;
function updateAnimation(newSpeed) {
    if (animationId)
        clearInterval(animationId);

    animationId = setInterval(() => {

       
        let x1= value1.innerText = getRandom();
       let x2= value2.innerText = getRandom();
       let x3= value3.innerText = getRandom();
        if(x1==x2  && x1==x3 && x2==x3)
        {
            alert("you win bro enjoy your life u will achieve a lot inn future")
           
       
           
        
        }

    }, 1000 / newSpeed)
//    if(x==1)
//     clearInterval(animationId);
}




inpSpeed.onchange = function (event) {
    // console.log('value changed',event.target.value);

    document.documentElement.style.setProperty('--speed', event.target.value)

   updateAnimation(event.target.value);
}