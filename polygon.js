class Polygon{

    constructor(x,y,r){

     var options={
     isStatic : false ,
     restitution : 0.9,
     friction : 0.5 ,
     density : 1.0
     }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,this.r,options);
      this.image= loadImage("polygon.png")
    World.add(world,this.body);
    }
    display(){

    var pos = this.body.position;

     push()
     translate(pos.x,pos.y)
     strokeWeight(0);
     fill("blue")
     imageMode(CENTER)
     image(this.image,0,0,60,60);
     pop()
    }

}