class Box{
   constructor(x,y,width,height){

     var options={
       restitution : 0.4 ,
       friction : 1.0,
       density : 1.0
     }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.Visibilty = 255;

       World.add(world,this.body);
       
   }
      display(){
        var angle = this.body.angle;
       if(this.body.speed < 3){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("lightblue")
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
       }
      else{
         World.remove(world,this.body)
         push();
         this.Visibilty = this.Visibilty - 5;
         tint(255,this.Visibilty);
         pop();
       }
      }

      score(){

        if(this.Visibilty<0 && this.Visibilty > -105){
        score++
        console.log("I AM RUNNING")
        
        }
        
         }
}
