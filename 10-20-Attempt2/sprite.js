let Sprite = function(filename, width, height) {
    this.image = null;
    this.pattern = null;
    this.isPattern = false;
    this.TO_RADIANS = Math.PI / 180;
    this.width = width;
    this.height = height;
    this.filename = filename;

    if (filename != undefined && filename != "" && filename != null) {
        this.image = new Image();
        this.image.src = filename;
    }
    else
    {
        console.log("Unable to load sprite");
    }

    this.addPattern = function(){
        this.isPattern = true;
        this.pattern = ctx.createPattern(this.image, "repeat");
    }

    this.drawSprite = function(sX, sY, sW, sH, dX, dY, dW, dH){
        ctx.drawImage(this.image, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    this.drawPattern = function(dX,dY,dW,dH){
        if(this.isPattern){
            ctx.fillStyle = this.pattern;
            ctx.fillRect(dX,dY,dW,dH);
        }
        else{
            console.log("You are attempting to draw a non-pattern object as a pattern")
            console.log("This object's src is: " + this.image.src);
        }
    }
}