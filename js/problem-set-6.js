/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {

 let hello = document.getElementById("canvas1").getContext("2d");
 hello.font = "48px sans-serif"
 hello.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

let height = prompt("Enter a rectangle height.");
let width = prompt("Enter a rectangle width.");
let xCoord = prompt("Enter an x coordinate.");
let yCoord = prompt("Enter a y coordinate.");
let rectangle = document.getElementById("canvas2");
if (rectangle.getContext){
  let drawing = rectangle.getContext("2d");
  drawing.strokeRect(xCoord, yCoord, width, height);
}
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

let color = prompt("Enter a valid color. Black, blue, green, orange, purple, red, and yellow are valid.");
let rectangle = document.getElementById("canvas3");
if (rectangle.getContext){
  let drawing = rectangle.getContext("2d");
  drawing.fillStyle = color;
  drawing.fillRect(10, 10, 100, 50);
}
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

 let triangle = document.getElementById("canvas4");
 let drawing = triangle.getContext("2d");
 drawing.clearRect(0, 0, canvas4.width, canvas4.height);
 let startX = 10;
 let startY = 10;
 let a = Number(prompt("Enter length 1:"));
 let b = Number(prompt("Enter length 2:"));
 let c = Number(prompt("Enter length 3:"));
 let total = Number(a + b + c);
 if(isNaN(a) || isNaN(b) || isNaN(c)){
     alert("This is not a valid triangle.");
 }
 else{
     let hypotenuse = Math.max(a, b, c);
     let shortLeg = Math.min(a, b, c)
     let longLeg = Number(total - (shortLeg+hypotenuse));
     if ((longLeg**2) + (shortLeg**2) != (hypotenuse**2)){
         alert("This triangle is not valid");
     }
     else if (longLeg>1024 || shortLeg>512){
         alert("This triangle is too big.");
     }
     else{
        drawing.beginPath();
        drawing.moveTo(startX, startY);
        drawing.lineTo(startX, startY+longLeg);
        drawing.lineTo(startX+shortLeg, startY+longLeg);
        drawing.lineTo(startX, startY);
        drawing.stroke();
        drawing.closePath();
     }
 }
}
/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
    let smile = document.getElementById("canvas5");
    let drawing = smile.getContext("2d");
    drawing.clearRect(0, 0, canvas5.width, canvas5.height);
    let radius = Number(prompt("Enter an integer for face radius."));
    if(isNaN(radius)){
        alert("You didn't enter a real number.");
    }
    else if(radius<1){
        alert("Your smiley face is too small.")
    }
    else if(radius>250.5){
        alert("Your smiley face is too big")
    }
    else{
        drawing.beginPath();
        drawing.arc(radius+10, radius+10, radius, 0, Math.PI*2, true);
        drawing.moveTo((radius+10)*.6,(radius+10)-(radius/2));
        drawing.arc((radius+10)-(radius/2),(radius+10)-(radius/2),radius*.1, 0,Math.PI*2,true);
        drawing.moveTo((radius+10)*1.6,(radius+10)-(radius/2));
        drawing.arc((radius+10)+(radius/2),(radius+10)-(radius/2),radius*.1,0,Math.PI*2,true);
        drawing.moveTo((radius+10)*1.7,radius+10);
        drawing.arc(radius+10,radius+10,radius*.7,0,Math.PI,false);
        drawing.stroke();
        drawing.closePath();
    }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
    let star = document.getElementById("canvas6");
    let drawing = star.getContext("2d");
    drawing.clearRect(0, 0, canvas6.width, canvas6.height);
    let iR = Number(prompt("Enter an inner radius for your star."));
    let oR = Number(prompt("Enter an outer radius for your star"));
    if(isNaN(iR) || isNaN(oR)){
        alert("One of your inputs is not a number.")
    }
    else if(iR<1 || oR<1){
        alert("One of your inputs is too small.")
    }
    else if(iR>=oR){
        alert("Your outer diameter is smaller than your inner diameter.")
    }
    else{
        drawing.beginPath();
        for (let i=0; i<=10; i++){
            let j = (i*Math.PI)/(5-Math.PI/2);
            let k;
            if(i%2 == 0){
                k = oR;
            }
            else{
                k = iR;
            }
            drawing.lineTo(125+k*Math.cos(j),125+k*Math.sin(j))
        }
        drawing.closePath();
        drawing.stroke();
    }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

    let sign = document.getElementById("canvas7");
    let drawing = sign.getContext("2d");
    drawing.clearRect(0, 0, canvas7.width, canvas7.height);
    let length = 120
    let j = 1.375

    drawing.beginPath();
    drawing.moveTo((length * Math.cos(1.375 * Math.PI)) + 107.5, (length * Math.sin(1.375 * Math.PI)) + 107.5);
    for (let i = 0 ; i < 9; i++) {
        drawing.lineTo((length * Math.cos(j * Math.PI)) + 107.5, (length * Math.sin(j * Math.PI)) + 107.5);
        j += .25;  
    }
    drawing.lineWidth = 4;
    drawing.stroke();
    drawing.fillStyle = "red";
    drawing.fill();
    drawing.font = "70px sans-serif","bold";
    drawing.fillStyle = "white";
    drawing.fillText("STOP", 19, 132.5);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
    let pyramid = document.getElementById("canvas8");
    let drawing = pyramid.getContext("2d");
    drawing.clearRect(0, 0, canvas8.width, canvas8.height);
    let length = Number(prompt("How long do you want your pyramid?"));
    if(isNaN(length)){
        alert("Your number is not a number. Enter a new one.");
    }
    else if((length*5+10)>1023 || (length*5+10)>511){
        alert("Your pyramid is too big. Enter a smaller number.")
    }
    else{
    let v = 1;
    let w = .5;
    let x = 10;
    let y = 502;
    let z = 5;
    function block() {
        drawing.beginPath();
        drawing.moveTo(x, y);
        drawing.lineTo(x, y - length);
        drawing.lineTo(x + length, y - length);
        drawing.lineTo(x + length, y);
        drawing.lineTo(x, y);
        drawing.stroke();
        };
    for (let i=0;i < 5;i++) {
      for (let i=0;i<z;i++) {
        block();
        x += length;
      }
      x = 10 + (w*length);
      y = 502 - (v*length);
      z--;
      v++;
      w += .5;
    }
    }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
    let house = document.getElementById("canvas9");
    let drawing = house.getContext("2d");
    drawing.clearRect(0,0,canvas9.width, canvas9.height);
    let houseColor = prompt("Enter a house color.");
    let doorColor = prompt("Enter a door color.");
    if ((houseColor == "blue" || houseColor == "brown"|| houseColor == "green" || houseColor == "orange" || houseColor == "purple" || houseColor == "red" || houseColor == "yellow") && (doorColor == "blue" || doorColor == "brown"|| doorColor == "green" || doorColor == "orange" || doorColor == "purple" || doorColor == "red" || doorColor == "yellow")){
    drawing.fillStyle="black";
    drawing.fillRect(150,300,724,450);
    drawing.fillStyle=houseColor;
    drawing.fillRect(151,301,722,448);
    drawing.fill();

    drawing.beginPath();
    drawing.moveTo(150,300);
    drawing.lineTo(510,10);
    drawing.lineTo(860,300);
    drawing.lineTo(150,300);
    drawing.fillStyle="black";
    drawing.fill();
    drawing.closePath();
    drawing.beginPath();
    drawing.moveTo(150,300);
    drawing.lineTo(510,12);
    drawing.lineTo(870,300);
    drawing.lineTo(150,300);
    drawing.fillStyle="gray";
    drawing.fill();
    drawing.closePath();

    drawing.fillStyle="black";
    drawing.fillRect(260,620,80,80);
    drawing.fillRect(260,400,80,80);
    drawing.fillRect(684,620,80,80);
    drawing.fillRect(684,400,80,80);
    drawing.fillStyle="lightblue";
    drawing.fillRect(261,620,80,80);
    drawing.fillRect(261,400,80,80);
    drawing.fillRect(685,620,80,80);
    drawing.fillRect(685,400,80,80);

    drawing.fillStyle="black"
    drawing.fillRect(462,590,100,160);
    drawing.fillStyle=doorColor;
    drawing.fillRect(462,590,100,160);

    drawing.beginPath();
    drawing.arc(545,670,8,0,Math.PI*2,true);
    drawing.fillStyle="black";
    drawing.fill();
    drawing.closePath();
    drawing.beginPath();
    drawing.arc(545,670,7,0,Math.PI*2,true);
    drawing.fillStyle="yellow";
    drawing.fill();
    drawing.closePath();
    } 
    else{
        alert("One of your colors is not valid.");
    }
}
