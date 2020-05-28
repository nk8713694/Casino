// console.log("hello");

// document.querySelectorAll('.slot .value');

let stop = document.getElementById('stop');

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
let x = 0;
function updateAnimation(newSpeed) {
    if (animationId)
        clearInterval(animationId);
    if (newSpeed != 0) {
        animationId = setInterval(() => {


            let x1 = value1.innerText = getRandom();
            let x2 = value2.innerText = getRandom();
            let x3 = value3.innerText = getRandom();
            if(x1==x2 && x2==x3 && x3==x1)
            {
                document.documentElement.style.setProperty('--speed', 0);
                updateAnimation(0)
                alert("you won enjoy")
            
            }

        }, 1000 / newSpeed)
    }



}





inpSpeed.onchange = function (event) {
    // console.log('value changed',event.target.value);

    document.documentElement.style.setProperty('--speed', event.target.value)

    updateAnimation(event.target.value);
}

stop.onclick = () => {
    console.log("hell")
    document.documentElement.style.setProperty('--speed', 0);
    updateAnimation(0)

   
}
