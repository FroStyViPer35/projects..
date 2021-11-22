class Alien {
    constructor(x,y){
        var options = {
            restitution : 0.04,
            friction : 0.02,
            density : 1

        }
        this.body = Bodies.rectangle(x,y, options)
        World.add(world, this.body)
    }

    display(){
        push ()

       translate (this.body.position.x, this.body.position.y)
       rotate (this.body.angle)
       image(alienImg, 0,0,30,30)
        pop ()

        
        
    }

}