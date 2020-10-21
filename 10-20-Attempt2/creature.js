let Creature = function(sprite, xPos, yPos, world){
    this.sprite = sprite;
    this.name = "";
    this.xPos =xPos;
    this.yPos = yPos;
    this.health = 100;
    this.destX = xPos;
    this.destY = yPos;
    //frame of an anim
    this.animX = 0;
    //animation #
    this.animY = 0;
    this.width = this.sprite.width;
    this.height = this.sprite.height;
    this.state = "idle";
    this.world = world;
    this.speed = null;

    this.assignValues = function(){
        if(this.sprite.filename == "images/solarNode.png"){
            this.name = "eye tree"
            this.animX = Math.floor((Math.random() * 4) + 1)
            this.animY = Math.floor((Math.random() * 2) + 1)
        }
        else if(this.sprite.filename == "images/mule.png")
        {
            this.name = "mule";
            this.speed = 8;
            this.state = "mRight";
            this.onload= this.move();
        }
        else if(this.sprite.filename == "images/player.png"){
            this.name = "player";
        }
        else if(this.sprite.filename == "images/refinery.png"){
            this.name = "refinery";
        }
    }
    this.doMyThing = function(){
        if(this.name == "mule"){
            this.move();
        }
    }

    this.doMyAnimations = function(){
        if(this.state == "idle"){
            this.playIdle();
        }
        if(this.state == "mRight" || this.state == "mLeft"){
            this.moveAnim();
        }
    }

    this.drawCreature = function(){
        this.sprite.drawSprite(this.animX * this.width, this.animY * this.height,
            this.width, this.height, this.xPos, this.yPos, this.width, this.height)
    }

    this.playIdle = function(){
        if(this.name == "eye tree"){
            this.animX += 1;
            if(this.animX > 4){
                this.animX = 0;
                this.animY += 1;
            }

            if(this.animY > 2){
                this.animY = 0;
            }
        }
        if(this.name == "refinery"){
            this.animY = 0;
            if(this.animX == 1)
            {
                this.animX = 0;
            }
            else{
                this.animX = 1;
            }
        }
        //this.animIntervalSet = false;
    }

    this.checkDest = function(){

        let xCoord = Math.floor(this.destX  / this.world.tileWidth);
        let yCoord = Math.floor(this.destY / this.world.tileHeight);
        let testIndex = 0;

        if(this.name == "mule"){
            console.log("I am moving " + this.state);
            console.log("X destination position: " + this.destX);
            console.log("X destination coordinate: " + xCoord);
            console.log("Index is = " + (((yCoord + 1) * this.world.width) + xCoord + 1));
            console.log("Index value is = " + this.world.worldArray[(((yCoord + 1) * this.world.width) + xCoord + 1)]);
            console.log("My X position: " + this.xPos);
            console.log("Rounded Destination Position = " + xCoord * 32 + ", " + yCoord * 32);
            if((this.world.worldArray[(((yCoord + 1) * this.world.width) + xCoord + 1)] == 1)){
                return true;
            }
            else
            {
                return false;
            }
        }
    }

    this.move = function(){
        if(this.name == "mule"){
            if(this.state == "mRight" || this.state == "idle") {
                this.destX = this.xPos + 32;
                this.destY = this.yPos;
                this.state = "mRight";
                if(this.checkDest() == false || this.destX > (this.world.width * this.world.tileWidth)){
                    console.log("Was moving right, but check was false");
                    this.destX = this.xPos - 32;
                    this.state = "mLeft";
                    if(this.checkDest == false || this.destX < 0){
                        console.log("Was moving left, but check was false");
                        this.destX = this.xPos;
                        this.state = "idle";
                    }
                }
            }
            if (this.state == "mLeft") {
                this.destX = this.xPos - 32;
                this.destY = this.yPos;
                if(this.checkDest() == false  || this.destX < 0){
                    console.log("Was moving left, but check was false");
                    this.destX = this.xPos + 32;
                    this.state = "mRight";
                    if(this.checkDest == false  || this.destX > this.world.width * this.world.tileWidth){
                        console.log("Was moving right, but check was false");
                        this.destX = this.xPos;
                        this.state = "idle";
                    }
                }
            }
            if(this.state == "mRight"){
                this.xPos += this.speed;
            }
            else if(this.state == "mLeft"){
                this.xPos -= this.speed;
            }
        }
    }

    this.moveAnim = function(){
        if(this.name == "mule"){
            this.animY = 0;
            if(this.state == "mLeft")
            {
                if(this.animX == 3)
                {
                    this.animX = 2;
                }
                else{
                    this.animX = 3;
                }
            }
            else{
                if(this.animX == 0){
                    this.animX = 1;
                }
                else{
                    this.animX = 0;
                }
            }
        }
    }

    this.assignValues();
}