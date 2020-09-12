class Tower{

constructor(x,y,width,height,angle){
var options={
restitution:0.8,
isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height,angle,options);
World.add(world,this.body);
}
display(){
//stroke(0)
var angle=this.body.angle;
push();
translate(this.body.position.x,this.body.position.y);
rotate(angle);
rectMode(CENTER)
pop()

}




}