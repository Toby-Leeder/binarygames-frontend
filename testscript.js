window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Fire { 
        constructor(){ 
            this.image = document.getElementById('fire');
            this.spriteWidth = 72;
            this.spriteHeight = 120;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = 0;
            this.y = 0;
            this.minFrame = 0;
            this.maxFrame = 14;
        }
        draw(context){ 
            context.drawImage(this.image, 216, 120, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
        update(){ 

        }
    }

    const fire = new Fire();

    function animate(){ 
        fire.draw(ctx);
    }
    animate();
})