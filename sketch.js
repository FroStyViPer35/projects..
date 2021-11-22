const Engine = Matter.Engine;
const World = Matter.World;

const Bodies= Matter.Bodies


var shooter,  alien, bullet, bulletImg, shooterImg , alienImg, playButton, playButtonImg, edges
var gameState = "serve"
var alienarr=[]


function preload(){
bulletImg = loadImage("images/bullet.png")
shooterImg = loadImage("images/shooter.png")
alienImg = loadImage("images/alien.png")
playButtonImg = loadImage("images/playButton.png")

}


function setup(){
createCanvas(displayWidth, displayHeight);

engine = Engine.create()
world = engine.world

playButton= createSprite( displayWidth/2-10, displayHeight/2)
playButton.addImage("play", playButtonImg)
playButton.scale = 0.2;

alien = new Alien(100,100)

shooter = createSprite(displayWidth/2-10, displayHeight-220)
shooter.addImage("shoot", shooterImg);
shooter.scale = 0.3 ;
shooter.visible = false



edges = createEdgeSprites();
}

function draw(){

 background("black")
 Engine.update(engine)

    if(gameState === "serve"){
        fill ("white")
        textSize (30)
        stroke("blue")
        strokeWeight(5)
        text ("ALIEN SHOOTER GAME!", displayWidth/2-200, displayHeight/2-100)

        if(mousePressedOver(playButton)){
        gameState = "play"

        
        }

    }

    if(gameState === "play"){
        shooter.visible = true;
        shooter.x = mouseX
        shooter.collide(edges[0])
        shooter.collide(edges[1])

        playButton.remove();

        
        

       alien.display() 

    }
    drawSprites();
}

function aliens(i){
if(frameCount % 100 === 0 ){
alien = createSprite(i, 50);
alien.addImage("alien", alienImg);
alien.scale = 0.09

}


}

