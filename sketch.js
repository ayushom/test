var cat, catImg1 ,catImg2,catImg3;
var jerry, jerryImg1, jerryImg2, jerryimg3;
var garden,backgroundImg;





function preload() { 
  backgroundImg= loadAnimation("garden.png"); 
  catImg1= loadAnimation("tomOne.png"); 
  catImg2=loadAnimation("tomTwo.png","tomThree.png"); 
  catImg3= loadAnimation("tomFour.png"); 
  jerryImg1=loadImage("jerryOne.png"); 
  jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png"); 
  jerryImg3=loadAnimation("jerryFour.png"); 
}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(900,500,300,400);
    cat.addAnimation(catImg1);
    cat.scale=0.1



    cat.scale=0.1

    garden=createSprite(100,20,20,20);
    garden.addAnimation(backgroundImg);
    garden.scale=2.4
   
    jerry=createSprite(500,500,500,100);
   // jerry.addImage(jerryImg1);
    jerry.scale=0.1
}

function draw() {

  background("red");

    cat.depth = garden.depth;
    cat.depth = cat.depth+1;

    if(cat.x - jerry.x < (cat.width - jerry.width)/2){
      
      cat.addAnimation("catLastImg",catImg3)
      cat.changeAnimation("catLastImg");
  
  }else{
  
      cat.addAnimation("running", catImg2)
      cat.changeAnimation("running");
  }

     keyPressed();
     drawSprites();
}

  



function keyPressed(){

 
  if (keyCode === LEFT_ARROW ){
    cat.addAnimation("running", catImg2)
    cat.changeAnimation(catImg2)
    cat.velocityX=-5;

  }


  

}
