let circle = document.getElementById("circle");
let upBt = document.getElementById("upBt");
let downBt = document.getElementById("downBt");
//console.log(circle);
let rorateValue = circle.style.transform;
let rotateSum;

console.log(rorateValue);

upBt.onclick = function(){
    /*反時計回り*/
    rotateSum = rorateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rorateValue = rotateSum;
    //let rorateValue = circle.style.transform;
    // is this hard for CPU?
} 
downBt.onclick = function(){
    /*時計回り*/
    rotateSum = rorateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rorateValue = rotateSum;
    console.log("Hello World!");
    //let rorateValue = circle.style.transform;
    // is this hard for CPU?
} 