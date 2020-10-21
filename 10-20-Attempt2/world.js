let World = function() {
    this.height = 16;
    this.width = 16;
    this.tileWidth = 32;
    this.tileHeight = 32;
    this.creatureArray = [];

    /*
    0 = wallBg
    1 = wallFg
    2 = player
    3 = eyeTree
    4 = mule
    5 = refinery
     */
    this.worldArray = [
        0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 3, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 4, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 3, 0,
        1, 1, 1, 0, 5, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 3, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 1, 1, 3, 0, 0, 0,
        1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0,
        0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1
    ]
    this.spriteArray = [];

    this.drawWorldStart = function(){
        for(let i = 0; i < this.worldArray.length; i++) {
            if(this.worldArray[i] != 0)
            {
                let xPos = (i % this.width) * this.tileWidth;
                let yPos = 	Math.floor(i / this.width) * this.tileHeight;

                this.spriteArray[this.worldArray[i]].drawSprite(0,0,
                    this.spriteArray[this.worldArray[i]].width,
                    this.spriteArray[this.worldArray[i]].height,
                    xPos, yPos, this.spriteArray[this.worldArray[i]].width,
                    this.spriteArray[this.worldArray[i]].height)
                if(this.worldArray[i] == 2 || this.worldArray[i] == 3 || this.worldArray[i] == 4 || this.worldArray[i] == 5)
                {
                    this.creatureArray[this.creatureArray.length] = new Creature(this.spriteArray[this.worldArray[i]], xPos, yPos, this);
                }
            }
        }
    }

    this.drawWorld = function(){
        for(let i = 0; i < this.worldArray.length; i++) {
            if(this.worldArray[i] == 1) {
                let xPos = (i % this.width) * this.tileWidth;
                let yPos = Math.floor(i / this.width) * this.tileHeight;

                this.spriteArray[this.worldArray[i]].drawSprite(0, 0,
                    this.spriteArray[this.worldArray[i]].width,
                    this.spriteArray[this.worldArray[i]].height,
                    xPos, yPos, this.spriteArray[this.worldArray[i]].width,
                    this.spriteArray[this.worldArray[i]].height)
            }
        }

        for(let i = 0; i < this.creatureArray.length; i++) {
            this.creatureArray[i].drawCreature();
        }
    }

    this.gamePlayLoop = function(){
        //console.log("Running GPL");
        for(let i = 0; i < this.creatureArray.length; i++) {
            this.creatureArray[i].doMyThing();
        }
    }

    this.animationLoop = function(){
        for(let i = 0; i < this.creatureArray.length; i++) {
            this.creatureArray[i].doMyAnimations();
        }
    }
}