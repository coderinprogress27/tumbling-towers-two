var block8
var block9
var block10
var block11
var block12
var block13
var block14
var block15
var crust_of_the_code_earth_that_is_pizza
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  block8 = new Block(330,235,30,40)
  block9 = new Block(360,235,30,40)
  block10 = new Block(390,235,30,40)
  block11 = new Block(420,235,30,40)
  block12 = new Block(450,235,30,40)
  block13 = new Block(360,195,30,40)
  block14 = new Block(390,195,30,40)
  block15 = new Block(420,195,30,40)
  block16 = new Block(390,155,30,40)
  World.add(world, block8)
  World.add(world, block9)
  World.add(world, block10)
  World.add(world, block11)
  World.add(world, block12)
  World.add(world, block13)
  World.add(world, block14)
  World.add(world, block15)
  World.add(world, block16)

  crust_of_the_code_earth_that_is_pizza = new Ground(360,240,10,200)
}

function draw() {
  if(block8.velocityX>3 || block8.velocityY>3){
    World.remove(world, block8)
    block8.tint=3++
  }
  if(block9.velocityX>3 || block9.velocityY>3){
    World.remove(world, block9)
    block9.tint=3++
  }
  if(block10.velocityX>3 || block10.velocityY>3){
    World.remove(world, block10)
    block10.tint=3++
  }
  if(block11.velocityX>3 || block11.velocityY>3){
    World.remove(world, block11)
    block11.tint=3++
  }
  if(block12.velocityX>3 || block12.velocityY>3){
    World.remove(world, block12)
    block12.tint=3++
  }
  if(block13.velocityX>3 || block13.velocityY>3){
    World.remove(world, block13)
    block13.tint=3++
  }
  if(block14.velocityX>3 || block14.velocityY>3){
    World.remove(world, block14)
    block14.tint=3++
  }
  if(block15.velocityX>3 || block15.velocityY>3){
    World.remove(world, block15)
    block15.tint=3++
  }
  if(block16.velocityX>3 || block16.velocityY>3){
    World.remove(world, block16)
    block16.tint=3++
  }
  background(255,255,255);  
  drawSprites();
}