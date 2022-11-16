var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2,fuels, powerCoins, plataCoins, cobreCoins;
var cars = [];
var fuelImage, powerCoinImage, plataCoinsImage, cobreCoinsImage;
var obstacles;
var life, lifeImgage;
//BP
function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  plataCoinsImage = loadImage("assets/plataCoin.png");
  cobreCoinsImage = loadImage("assets/cobreCoin.png");
 lifeImage = loadImage("assets/life.png");

obstacle1Image = loadImage("assets/obstacle1.png");
obstacle2Image = loadImage("assets/obstacle2.png");

}


//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
