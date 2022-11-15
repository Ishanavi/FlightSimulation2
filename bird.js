AFRAME.registerComponent("flying-birds",
{
    init: function(){
        for(var i=1;i<=20;i++)
        {
            var id = `bird${i}`
            var posX = (Math.random()*3000+(-1000))
            var posY = (Math.random()*2+(-1))
            var posZ = (Math.random()*3000+(-1000))
            var pos = {x:posX,y:posY,z:posZ}
            this.createBirds(id,pos)
        }
    },

    createBirds: function(id,position){
        var terrainE1 = document.querySelector("#terrain")
        var birdE1 = document.createElement("a-entity")

        birdE1.setAttribute("id",id)
        birdE1.setAttribute("position",position)
        birdE1.setAttribute("scale",{x:500,y:500,z:500})
        birdE1.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        birdE1.setAttribute("animation-mixer",{})

        birdE1.appendChild(terrainE1)
        
    }
})