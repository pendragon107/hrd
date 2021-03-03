class slingshot{
    constructor( bodyA, pointB){
    var options={
        bodyA: bodyA, pointB:pointB,stiffness:.05, lenght:30
    }
    this.pointB=pointB
    this.chian=Matter.Constraint.create(options)
    World.add(world, this.chian)
    }
    fly(){
        this.chian.bodyA=null
    }
    display(){
        if(this.chian.bodyA){
            line(this.chian.bodyA.position.x, this.chian.bodyA.position.y, this.chian.pointB.x, this.chian.pointB.y)
        }
        
    }
}
