var database;
var playerCount ;
var form , player, game ;
var gameState = 0 ;
var allPlayers ;




function setup(){
  createCanvas(500,500);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();


}

function draw(){
  background("white");
  
  if(playerCount === 4)
  {
    console.log("playerCount4")
    game.update(1);
  }

  if(gameState === 1)
  {
    clear();
    console.log("gameState 1")
    game.play();
  }
    drawSprites();
  
}

