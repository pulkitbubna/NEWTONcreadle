class rope{
    constructor(bodyA,bodyB,offsetx,offsety){
        this.offsetX = offsetx;
        this.offsetY = offsety;
        var options = {
            
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        } 
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    }
    display() {
     var pointA = this.chain.bodyA.position;
     var pointB = this.chain.bodyB.position;
     strokeWeight(2);
     var Anchor1X = pointA.x;
     var Anchor1Y = pointA.y;

     var Anchor2X = pointB.x+this.offsetX;
     var Anchor2Y = pointB.x+this.offsety;
     
     line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    
    }
}