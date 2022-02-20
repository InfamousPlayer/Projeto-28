class launcher{
	constructor(body,anchor)
	{
		//constroi o launcher
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			 
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}
	//esse eu nao sei exatamente, acho que prende o launcher ao corpo
	attach(body){
		this.launcher.bodyA=body;
	}
    //faz com que a pedra voe quando o mouse e solto
	fly()
	{
		this.launcher.bodyA=null;
	}
    //faz a linha e o lancador aparecerem e se conectarem
	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}











