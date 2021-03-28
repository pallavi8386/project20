var bgImg, tomImg1, tomImg2, tomImg4, tom, jerryImg1, jerryImg2, jerryImg3, jerry;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");

    tomImg1 = loadAnimation("cat1.png");
    tomImg2 = loadAnimation("cat2.png", "cat3.png");
    tomImg4 = loadAnimation("cat4.png");

    jerryImg1 = loadAnimation("mouse1.png");
    jerryImg2 = loadAnimation("mouse3.png", "mouse4.png");
    jerryImg3 = loadAnimation("mouse2.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,580,50,50);
    tom.addAnimation("tomFirstImg",tomImg1);
    tom.addAnimation("tomWalking", tomImg2);
    tom.addAnimation("tomLastImg",tomImg4);
    tom.scale = 0.15;

    jerry = createSprite(200,580,30,40);
    jerry.addAnimation("jerryFirstImg",jerryImg1);
    jerry.addAnimation("jerryTeasing", jerryImg2);
    jerry.addAnimation("jerryLastImg", jerryImg3);
    
    jerry.scale = 0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
    if((tom.x - jerry.x) < (tom.width/2 + jerry.width/2)){
        tom.velocityX = 0;
        tom.changeAnimation("tomLastImg",tomImg4);
        jerry.changeAnimation("jerryLastImg", jerryImg3);
    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("left_arrow")){
        tom.velocityX = -3;
        tom.changeAnimation("tomWalking", tomImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing", jerryImg2);

    }

   
}
