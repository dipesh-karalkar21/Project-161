AFRAME.registerComponent("throw",{
    init:function(){
        this.createBowl();
    },

    createBowl:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key == "z"){
                var bowl = document.createElement("a-entity");

                bowl.setAttribute("geometry",{
                    primitive : "sphere",
                })

                bowl.setAttribute("material",{
                    color : "#000",
                })


                var cam = document.querySelector("#camera");
                var pos = cam.getAttribute("position");
                
                bowl.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})

                var camera = document.querySelector("#camera").object3D;
                var direction = new THREE.Vector3();

                camera.getWorldDirection(direction);
                
                bowl.setAttribute("rotation",direction)
                bowl.setAttribute("velocity",direction.multiplyScalar(-5))

                var scene = document.querySelector("#scene");

                scene.appendChild(bowl);


            }
        })
    },

}) 