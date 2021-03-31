/*
  There are two canvases in this program:

  Top canvas: The top canvas (canvas2) will be redrawn to allow for moving rectangles
  to highlight where the mouse is relative to the pixel grid of the picross tablet.
  This will allow a timer and possibly animated pictures as well.

  Bottom canvas: The bottom canvas (canvas) is static and only drawn once when the 
  html document is loaded.
  
*/

function draw() {
  let canvas = document.getElementById('canvasBottom');
  let canvas2 = document.getElementById('canvasTop');
  let ctx = canvas.getContext('2d');
  let ctx2 = canvas2.getContext('2d');

  // Read from file and set the below accordingly:
  const height = window.innerHeight - 100;
  const width = (window.innerHeight * 2) - 100;
  const cellHeight = 15;
  const cellWidth = 30;

  // Set canvas dimensions:
  canvas.height = height;
  canvas.width = width;
  canvas2.height = height;
  canvas2.width = width;

  // Draw grid on bottom right of canvas:
  let x = width/2;
  let y = height/2;

  for (let i = 0; i < cellHeight; i++) {
    for (let j = 0; j < cellWidth; j++) {
      ctx.strokeRect(x, y, (width/cellWidth) / 2, (height/cellHeight) / 2);
      x += (width/cellWidth) / 2;
     }
     y += (height/cellHeight) / 2;
     x = width/2;
   }

  // Draw rectangles above the grid:
  x = width/2;
  y = 0

  for (let i = 0; i < cellWidth; i++) {
    if (i % 2 === 0) {
      ctx.strokeRect(x,y, (width/cellWidth) / 2, height / 2);
    } else {
      ctx.fillStyle = '#000000';
      ctx.fillRect(x,y, (width/cellWidth) / 2, height / 2);
      ctx.fillStyle = '#CAE5FF';
      ctx.fillRect(x + 1,y + 1, ((width/cellWidth) / 2) - 2, (height / 2) - 2);
    }
    
    x += (width/cellWidth) /2;
  }

  // Draw rectangles to the left of the grid:
  x = 0;
  y = height/2;

  for (let i = 0; i < cellHeight; i++) {
    if (i % 2 === 0) {
      ctx.strokeRect(x,y, width / 2, (height/cellHeight) /2);
    } else {
      ctx.fillStyle = '#000000';
      ctx.fillRect(x,y, width / 2, (height/cellHeight) /2);
      ctx.fillStyle = '#CAE5FF';
      ctx.fillRect(x + 1,y + 1, (width / 2) - 2, ((height/cellHeight) /2) - 2);
    }

    y += (height/cellHeight) / 2;
  }

  // Draw lines separating pixels by groups of five:

  // Set line stroke and line width
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 3;

  // Draw horizontal lines:

  for (let i = 1; i < cellHeight / 5; i++) {
    ctx.beginPath();
    ctx.moveTo(width / 2, (height / 2) + (((height / cellHeight) * 5) / 2) * i);
    ctx.lineTo(width, (height / 2) + (((height / cellHeight) * 5) / 2) * i);
    ctx.stroke();
    console.log('Horizontal lines ran ' + i + ' times!');
  }

  // Draw vertical lines:

  for (let i = 1; i < cellWidth / 5; i++) {
    ctx.beginPath();
    ctx.moveTo((width / 2) + (((width / cellWidth) * 5) / 2) * i, height /2);
    ctx.lineTo((width / 2) + (((width / cellWidth) * 5) / 2) * i, height);
    ctx.stroke();
    console.log('Vertical lines ran ' + i + ' times!');
  }
  
  // Draw border around canvas:

  // After drawing, add event listeners:

  canvas2.addEventListener('mousedown', function(event) {
    mouseClicked(event, height, width, cellHeight, cellWidth);
  });
  
}

// =============================================

function mouseClicked(event, height, width, cellHeight, cellWidth) {
  // Get the mouse position relative to the canvas:
  let mouseX = event.layerX;
  let mouseY = event.layerY;
  let cellSelectX = Math.floor((mouseX - (width / 2)) / ((width / 2) / cellWidth));
  let cellSelectY = Math.floor((mouseY - (height / 2)) / ((height / 2) / cellHeight));

  // Output debug:
  document.getElementById('debug').innerHTML =
    'Debug' +
    '<br>==================' +
    '<br>Mouse button: ' + event.which + 
    '<br>Cell: ' + cellSelectX + ', ' + cellSelectY +
    '<br>Mouse X position: ' + mouseX +
    '<br>Mouse Y position: ' + mouseY +
    '<br>Width of the canvas: ' + width + 'px' +
    '<br>Height of the canvas: ' + height + 'px' +
    '<br>Picross tablet width: ' + cellWidth +
    '<br>Picross tablet height: ' + cellHeight
    ;

  // Based on click, do an action:
  switch (event.which) {
    case 1:
      //placePixel(cellSelectX, cellSelectY);
      break;
    case 2:
      //placeGuess(); 
      break;
    case 3:
      //placeXMark();
      break;
    default:
      console.log('Weird mouse, bro.');
  }

}

// =============================================

function placePixel(cellSelectX, cellSelectY) {
  
}
