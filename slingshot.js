class Slingshot{

    constructor(abody,bpoint){
  
      var options = {
          bodyA : abody,
          pointB: bpoint,
          stiffness: 0.1,
          length : 10
      }
      this.pointB = bpoint
      this.slingshot = Constraint.create(options);
      World.add(world, this.slingshot)
  }
  
  fly(){
  
  this.slingshot.bodyA = null
  
  }
  attach(body){

    this.slingshot.bodyA = body
    
    }

    display(){
  if(this.slingshot.bodyA){
  var pointA = this.slingshot.bodyA.position
  var pointB = this.pointB
  
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
  }
  }
  }