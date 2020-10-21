const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const sprites = {};

sprites.player = new Sprite("images/player.png", 32, 64)
const playerWidth = '32';
const playerHeight = '64';
let playerFrameX = 0;
let playerFrameY = 0;
let playerX = 0;
let playerY = 0;
const playerSpeed = 6;

sprites.solarNode = new Sprite("images/solarNode.png",  32, 64);
sprites.mule = new Sprite("images/mule.png",  64, 32)
sprites.wallBg = new Sprite("images/wallBg.png",  32, 32);
sprites.wallFg = new Sprite("images/wallFg.png",  32, 32);
sprites.refinery = new Sprite("images/refinery.png",96, 32)

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    sprites.wallBg.drawPattern(0,0, canvas.width,canvas.height);
    world.drawWorld();
    world.gamePlayLoop();
    /*sprites.player.drawSprite(playerWidth * playerFrameX,
        playerHeight * playerFrameY, playerWidth,
        playerHeight, playerX, playerY, playerWidth, playerHeight);

     */
}

function animate(){
    world.animationLoop();
}

world = new World();
window.onload = function(){
    world.spriteArray[world.spriteArray.length] = sprites.wallBg;
    world.spriteArray[world.spriteArray.length] = sprites.wallFg;
    world.spriteArray[world.spriteArray.length] = sprites.player;
    world.spriteArray[world.spriteArray.length] = sprites.solarNode;
    world.spriteArray[world.spriteArray.length] = sprites.mule;
    world.spriteArray[world.spriteArray.length] = sprites.refinery;


    sprites.wallBg.addPattern();
    world.drawWorldStart();
    setInterval(animate, 1000/4);
    setInterval(draw, 1000/30);
}

window.addEventListener('resize', function(){
    console.log("You resized canvas and window!");
   canvas.height = window.innerHeight;
   canvas.width = window.innerWidth;
})

/*
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(image, dx, dy);
    ctx.drawImage(image,dx,dy,dW,dH)
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}
For sprite sheets:

const imageName_height
const imageName_width
let imageNameFrameX
let imageNameFrameY
used to select frame from sprite sheet
 */