class Hero {
    constructor(x,y,r)
      {
          var options = { 
            density: 1, 
            frictionAir: 0.5
      };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("images/Superhero-01.png");
          this.body=Bodies.circle(this.x, this.y, (this.r), options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var heroPos=this.body.position;		
              push()
              translate(heroPos.x, heroPos.y);
              rectMode(CENTER)
             
              imageMode(CENTER);
              image(this.image, 0,0,350, 200)
              pop()
              
      }
  }
  