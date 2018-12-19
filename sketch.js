// Red Square - box 0
// Green Square - box 1
// Blue Square - box 2
// Yellow Square - box 3
var redTile;
var greenTile;
var blueTile;
var yellowTile;

function setup() {
  createCanvas(400, 400);
	
	redTile = new Tile(50,50,100,color(255,0,0));
	greenTile = new Tile(200,50,100,color(0,255,0));
	blueTile = new Tile(50,200,100,color(0,0,255));
	yellowTile = new Tile(200,200,100,color(255,255,0));
	
}

function draw() {
  background(220);
	drawBoard();
}

function drawBoard() {
	redTile.show();
	greenTile.show();
	blueTile.show();
	yellowTile.show();
}

function mouseClicked() {
	// get mouse location and determine which tile was clicked
	var boxNbr = getClickedTile(mouseX, mouseY);
}

function getClickedTile(mX,mY) {
	
}

class Tile {
	constructor(x,y,s,c) {
		this.x = x;
		this.y = y;
		this.w = s;
		this.h = s;
		this.tileColor = c;
		this.highlight = false;
	}
	show() {
		if(this.highlight) {
			fill(this.tileColor,200);
				noFill();
			rect(this.x-this.w/2,this.y-this.h/2,this.x+this.w+this.w/2,this.y+this.h+this.h/2);
		}
		else {
			fill(this.tileColor)
				noFill();
			rect(this.x,this.y,this.w,this.h);
		}
	}
}