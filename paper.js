class Paper {
    constructor(x,y,radius){
        var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
    
      this.radius=radius
      this.body=Bodies.circle(x,y,radius,options)
      this.image=loadImage("paper.png")
     World.add(world,this.body)
    }
    display(){
        var paperposition=this.body.position
        push();
        translate(paperposition.x,paperposition.y)
        fill("yellow")
        ellipseMode(RADIUS)
        ellipse (0,0,this.radius,this.radius)
        pop();
    }
};