class attach {
constructor (bodyA,bodyB) {
var overattached = {
    bodyA : bodyA ,
    bodyB : bodyB ,
    stiffness : 0.04 , 
        length : 10
} 
this.aattach = Constraint.create(overattached);
World.add(world,this.aattach);
}
display() {
var pointA = this.aattach.bodyA.position;
var pointB = this.aattach.bodyB.position;
line (pointA.x,pointA.y,pointB.x,pointB.y)
}
}