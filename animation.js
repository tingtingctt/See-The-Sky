// Take your screen outside and hold it above your head.
// Click here to poke a hole in the screen.
// Look into the screen through the hole.
// As the hole opens up, you see the sky inside the screen.
// Compare its color with that of the sky above your head.


var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var needleLength = 30;
var r = 4;
var maxRadius = window.innerHeight/2;

drawBackground();
drawNeedle(30);
setTimeout(pokeHole, 2000);


function drawBackground(){
    c.fillStyle = "black";
    c.fillRect (0, 0, canvas.width, canvas.height);
}

function drawNeedle(needleLength){
    c.beginPath();
    c.moveTo(canvas.width/2, canvas.height/2);
    c.lineTo(canvas.width/2, canvas.height/2 - needleLength);
    c.strokeStyle = "#ecf4f9";
    c.stroke();

    c.beginPath();
    c.arc (canvas.width/2, canvas.height/2 - needleLength - r, r, Math.PI * 2, false);
    c.stroke();
}


function pokeHole(){
    for (var i=0; i<needleLength; i++){
        setTimeout(function(){
            var newLength = needleLength - i;
            drawBackground();
            drawNeedle(newLength);
        }, 200);

        if (i=needleLength){
            setTimeout(function(){
                drawBackground();
                drawHole(2);
            }, 200);

            setTimeout(openHole, 1000);
        }
    };
}

function drawHole(radius){
    c.arc (canvas.width/2, canvas.height/2, radius, Math.PI * 2, false);
    c.fillStyle = "#408cbf";
    c.fill();
}


function openHole(){
    drawBackground();
    drawHole(2);

    for (var i=0; i<maxRadius; i++){
        var newRadius = 1;
        setTimeout(function(){
            drawBackground();
            newRadius++;
            drawHole(newRadius);
        }, 1000);
    }
};



// function drawHeight() {
//     c.clearRect(0, 0, canvas.width, canvas.height);

//     var x = 0;
//     var y = canvas.height / 2;

//     c.fillStyle = "#47476b";
//     c.font = "30px Arial";
//     c.textAlign = "center";
//     c.fillText("Draw a line to match your height.", canvas.width/2, y-20);

//     for (var i=0; i<myHeight; i++){
//         setTimeout(function(){
//             c.beginPath();
//             c.moveTo(x, y);
//             c.lineTo(x+1, y);
//             c.strokeStyle = "#47476b";
//             c.stroke();
//             if (x > canvas.width) {
//                 y = y+20;
//                 x = 0;
//             }else{x = x + 1;}   
//         }, 10);
//     }

//     setTimeout (drawWidth, 4000);
//     setTimeout (drawWeight, 7000);
//     setTimeout (computerDies, 10000);
// }


// function drawWidth() {
//     c.clearRect(0, 0, canvas.width, canvas.height);

//     var x = 0;
//     var y = canvas.height / 2;

//     c.fillStyle = "#47476b";
//     c.font = "30px Arial";
//     c.textAlign = "center";
//     c.fillText("Draw another to match your width.", canvas.width/2, y-20);

//     for (var i=0; i<myWidth; i++){
//         setTimeout(function(){
//             c.beginPath();
//             c.moveTo(x, y);
//             c.lineTo(x+1, y);
//             c.strokeStyle = "#47476b";
//             c.stroke();
//             if (x > canvas.width) {
//                 y = y+20;
//                 x = 0;
//             }else{x = x + 1;}   
//         }, 10);
//     }
// }

// function drawWeight() {
//     c.clearRect(0, 0, canvas.width, canvas.height);

//     var x = 0;
//     var y = canvas.height / 2;

//     c.fillStyle = "#47476b";
//     c.font = "30px Arial";
//     c.textAlign = "center";
//     c.fillText("Draw another to match your weight.", canvas.width/2, y-20);

//     for (var i=0; i<myWeight; i++){
//         setTimeout(function(){
//             c.beginPath();
//             c.moveTo(x, y);
//             c.lineTo(x+1, y);
//             c.strokeStyle = "#47476b";
//             c.stroke();
//             if (x > canvas.width) {
//                 y = y+20;
//                 x = 0;
//             }else{x = x + 1;}   
//         }, 10);
//     }
// }


// function computerDies() {
//     c.clearRect(0, 0, canvas.width, canvas.height);

//     var x = 0;
//     var y = 20;

//     c.fillStyle = "#47476b";
//     c.font = "30px Arial";
//     c.textAlign = "center";
//     c.fillText("Keep drawing until computer dies.", canvas.width/2, canvas.height/2);

//     var draw = setInterval(function(){
//         c.beginPath();
//         c.moveTo(x, y);
//         c.lineTo(x+1, y);
//         c.strokeStyle = "#47476b";
//         c.stroke();
//         if (x > canvas.width) {
//             y = y+10;
//             x = 0;
//         }else{
//             x = x + 1;
//         };

//         if (y > canvas.height - 20) {
//             c.clearRect(0, 0, canvas.width, canvas.height);
//             clearInterval(draw);
//         }

//         if (y > 20) {
//             c.fillText("Keep drawing until you die.", canvas.width/2, canvas.height/2 + 30);
//         }

//     }, 1);


    // for (var i=0; i<canvas.width*canvas.height; i++){
    //     setTimeout(function(){
    //         c.beginPath();
    //         c.moveTo(x, y);
    //         c.lineTo(x+1, y);
    //         c.strokeStyle = "#47476b";
    //         c.stroke();
    //         if (x > canvas.width) {
    //             y = y+10;
    //             x = 0;
    //         }else{
    //             x = x + 1;}   
    //     }, 10);
    // }
// }

// window.setInterval()
// var myVar = setInterval(myTimer, 1000);
// function myStopFunction() {
//     clearInterval(myVar);
//   }

// window.setTimeout(function(){ alert("Hello"); }, 3000);

// window.requestAnimationFrame().


// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(150, 300);
// c.strokeStyle = "#47476b";
// c.stroke();


// c.fillStyle = "#fa34a3";
// c.fillRect (100, 100, 100, 100);


// c.font = "30px Arial";
// c.strokeText("Hello World", 10, 50);

// c.fillStyle = "red";
// c.textAlign = "center";
// c.fillText("Hello World", canvas.width/2, canvas.height/2);




// function drawBackground() {
//     ctx.drawImage(imgBg, 0, 0, window.innerWidth, window.innerHeight); //Background
//   }

// function draw() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     drawBackground();
//     for (var i=0; i< noOfDrops; i++){
//         ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); //The rain drop
//         fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
//         if (fallingDrops[i].y > window.innerHeight + 70) {  //Repeat the raindrop when it falls out of view
//             fallingDrops[i].y = -70 //Account for the image size
//             fallingDrops[i].x = Math.random() * window.innerWidth;    //Make it appear randomly along the width    
//         }
//     }
// }


// function setup() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     if (canvas.getContext) {
//         ctx = canvas.getContext('2d');

//         imgBg = new Image();
//         imgBg.width = window.innerWidth;
//         imgBg.src = "/assets/image/devour.png";

//         setInterval(draw, 36);

//         for (var i = 0; i < noOfDrops; i++) {
//             var fallingDr = new Object();
//             fallingDr["image"] =  new Image();
//             fallingDr.image.src = '/assets/image/burger.png';
//             fallingDr["x"] = Math.random() * window.innerWidth;
//             fallingDr["y"] = Math.random() * 5;
//             fallingDr["speed"] = 3 + Math.random() * 5;
//             fallingDrops.push(fallingDr);
//         }
//     }  
// }




// setup();
