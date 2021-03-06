class Ball {
    constructor(x, y, radius){
      var options = {
          isStatic:true
       }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      this.radius = radius;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  }