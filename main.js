function draw() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  // Read from file and set the below accordingly:
  const height = 800;
  const width = 800;
  const cellWidth = 8;
  const cellHeight = 8;

  // Set canvas dimensions:
  canvas.height = height;
  canvas.width = width;

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
    ctx.strokeRect(x,y, (width/cellWidth) / 2, height / 2);
    x += (width/cellWidth) /2;
  }

  // Draw rectangles to the left of the grid:
  x = 0;
  y = height/2;
  for (let i = 0; i < cellHeight; i++) {
    ctx.strokeRect(x,y, width / 2, (height/cellHeight) /2);
    y += (height/cellHeight) / 2;
  }

  // Add event listener to canvas for left click:
  canvas.addEventListener('mousedown', function(event) {
    mouseClicked(event, height, width, cellHeight, cellWidth);
  });
  
}

function mouseClicked(event, height, width, cellHeight, cellWidth) {
  // Get the mouse position relative to the canvas:
  let mouseX = event.layerX;
  let mouseY = event.layerY;

  // Output debug:
  document.getElementById('debug').innerHTML = 'Mouse button: ' + event.which + ' Position: X = ' + mouseX + ' Y = ' + mouseY + 
    '<br>Cell: ' + "figure out what cell I'm clicking in.";

  // Based on click, do an action:
  switch (event.which) {
    case 1:
      //placePixel();
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
