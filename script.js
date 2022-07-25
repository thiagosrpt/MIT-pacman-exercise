var posX = 0;
    var posY = 0;
    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'], //left-right
        ['PacMan3.png', 'PacMan4.png'], //right-left
        ['PacMan5.png', 'PacMan6.png'], //top-down
        ['PacMan7.png', 'PacMan8.png'], //down-top
    ];
    var direction = 0;
    var focus = 0;


        function logKey(e) {
            if(e.code==="ArrowDown") {
                posY += 40;
               direction = 2;
            };
            if(e.code==="ArrowRight") {
                posX -= 40;
               direction = 0;
            };
            if(e.code==="ArrowLeft") {
                posX += 40;
               direction = 1;
            };
            if(e.code==="ArrowUp") {
                posY -= 40;
               direction = 3;
            };
            console.log(e.code)
        }
    
        addEventListener('keydown', logKey);



    function Run() {
        let img = document.getElementById("PacMan");
        let imgWidth = img.width
        let imgHeight = img.height
        focus = (focus + 1) % 2;
        direction = checkPageBounds(direction, imgWidth, imgHeight);
        img.src = pacArray[direction][focus];
        if (direction === 1) {
            posX -= 20;
            img.style.left = posX + "px";
        } if (direction === 0) {
            posX += 20;
            img.style.left = posX + 'px';
        } if (direction === 2) {
            posY += 20;
            img.style.top = posY + 'px';
        } if (direction === 3) {
            posY -= 20;
            img.style.top = posY + 'px';
        }
        
        // Use setTimeout to call Run every 200 millesecs
    }
    setInterval(Run, 100);

    function checkPageBounds(direction, imgWidth, imgHeight) {
        //
        // Complete this to reverse direction on hitting page bounds
        let imgPositionX = parseInt(document.getElementById("PacMan").style.left.replace(/px$/, ''));
        let imgPositionY = parseInt(document.getElementById("PacMan").style.top.replace(/px$/, ''));
        let pageWidth = window.innerWidth;
        let pageHeight = window.innerHeight;
        
        if(imgPositionY < 0 && imgPositionX < 0) {
            direction = 0; //left-right
            console.log(direction)
        }
        if((imgPositionX + imgWidth) >= pageWidth) {
            direction = 2; //top-down
            console.log(direction)
            console.log(imgPositionX + imgWidth)
        }
        if((imgPositionY + imgHeight) >= pageHeight) {
            direction = 1; //right-left
            console.log(direction)
        }
        if(imgPositionX < 0 && imgPositionY > 0) {
            direction = 3;
            console.log(direction)
        }


        return direction
        console.log(direction);

    }