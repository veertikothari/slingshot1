class slingshot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:5,
        stiffness: 0.02
    }
    this.pointB=pointB;
this.sling=Constraint.create(options);
World.add(world,this.sling)
}
fly(){
    this.sling.bodyA=null 
}
display(){
    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
}