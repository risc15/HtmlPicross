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

  // Read from file and set the below values accordingly:
  const cellHeight = 10;
  const cellWidth = 10;
  const targetCanvasHeight = 800;
  const height = targetCanvasHeight;
  let width = 0;
  let cellSizeInPixels = 0;

  if (cellWidth === cellHeight) {
    cellSizeInPixels = (targetCanvasHeight / 4) * 3 / cellHeight;
    width = targetCanvasHeight;
  } else {
    cellSizeInPixels = ((targetCanvasHeight / 4) * 3 / cellHeight) / 2;
    width = targetCanvasHeight + targetCanvasHeight / 2;
   }

  // Set canvas dimensions:
  canvas.height = height;
  canvas.width = width;
  canvas2.height = height;
  canvas2.width = width;
/*
  // Set background image:
  let imagePath = "images/concrete_seamless_800x800.png";
  let img = new Image();
  img.src = imagePath;
  
  img.onload = function () {
    ctx.drawImage(img,0, 0);
  };
*/
  // Draw grid on bottom right of canvas:
  let x = width / 4;
  let y = height / 4;

  for (let i = 0; i < cellHeight; i++) {
    for (let j = 0; j < cellWidth; j++) {
      ctx.strokeRect(x, y, cellSizeInPixels, cellSizeInPixels);
      x += cellSizeInPixels;
     }
     y += cellSizeInPixels;
     x = width / 4;
   }

  // Draw rectangles above the grid:
  x = width / 4;
  y = 0

  for (let i = 0; i < cellWidth; i++) {
    if (i % 2 === 0) {
      ctx.strokeRect(x,y, cellSizeInPixels, height / 4);
    } else {
      ctx.fillStyle = '#000000';
      ctx.fillRect(x,y, cellSizeInPixels, height / 4);
      ctx.fillStyle = '#CAE5FF';
      ctx.fillRect(x + 1,y + 1, cellSizeInPixels - 2, (height / 4) - 2);
    }
    
    x += cellSizeInPixels;
  }

  // Draw rectangles to the left of the grid:
  x = 0;
  y = height / 4;

  for (let i = 0; i < cellHeight; i++) {
    if (i % 2 === 0) {
      ctx.strokeRect(x,y, width / 4, cellSizeInPixels);
    } else {
      ctx.fillStyle = '#000000';
      ctx.fillRect(x,y, width / 4, cellSizeInPixels);
      ctx.fillStyle = '#CAE5FF';
      ctx.fillRect(x + 1,y + 1, (width / 4) - 2, cellSizeInPixels - 2);
    }

    y += cellSizeInPixels;
  }

  // Draw lines separating pixels by groups of five:

  // Set line stroke and line width
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2;

  // Draw horizontal lines:

  for (let i = 1; i < cellHeight / 5; i++) {
    ctx.beginPath();
    ctx.moveTo(width / 4, (height / 4) + (cellSizeInPixels * i) * 5);
    ctx.lineTo(width, (height / 4) + (cellSizeInPixels * i) * 5);
    ctx.stroke();
    console.log('Horizontal lines ran ' + i + ' times!');
  }

  // Draw vertical lines:

  for (let i = 1; i < cellWidth / 5; i++) {
    ctx.beginPath();
    ctx.moveTo((width / 4) + (cellSizeInPixels * i) * 5, height / 4);
    ctx.lineTo((width / 4) + (cellSizeInPixels * i) * 5, height);
    ctx.stroke();
    console.log('Vertical lines ran ' + i + ' times!');
  }

  // After drawing, add event listeners:

  // Reduce parameters for mouseClicked after debugging complete:
  canvas2.addEventListener('mousedown', () => {
    mouseClicked(height, width, cellHeight, cellWidth, cellSizeInPixels);
  });
  
  canvas2.addEventListener("mousemove", () => {
    mouseMoved();
  });

}

// =============================================

function mouseClicked(height, width, cellHeight, cellWidth, cellSizeInPixels) {
  // Get the mouse position relative to the canvas:
  let mouseX = event.layerX;
  let mouseY = event.layerY;
  let cellSelectX = Math.floor((mouseX - (width / 4)) / cellSizeInPixels);
  let cellSelectY = Math.floor((mouseY - (height / 4)) / cellSizeInPixels);

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

// =============================================

function mouseMoved() {
  console.log(event.layerX + ', ' + event.layerY);
}
