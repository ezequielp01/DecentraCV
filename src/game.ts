import { addLabel } from "@dcl/ecs-scene-utils";

 
const testSh = new Entity();
const studies = new Entity();
const brief = new Entity();
const sub_brief = new Entity();
const techstack = new Entity();
const interest = new Entity();
const forma = new Entity();
const forma2 = new Entity();
const forma3 = new Entity();
const forma4 = new Entity();
const forma5 = new Entity();
const forma6 = new Entity();
const forma7 = new Entity();
const forma8 = new Entity();
const forma9 = new Entity();
const forma10 = new Entity();
const forma11 = new Entity();
const forma12 = new Entity();
const forma13 = new Entity();
const forma14 = new Entity();
const forma15 = new Entity();
const forma16 = new Entity();
const forma17 = new Entity();
const forma18 = new Entity();
const forma19 = new Entity();
const forma20 = new Entity();
const inters = new Entity();
const thanks = new Entity();
let box = new BoxShape();
 
 
engine.addEntity(testSh);
engine.addEntity(brief);
engine.addEntity(sub_brief);
engine.addEntity(studies);
engine.addEntity(techstack);
engine.addEntity(interest);
engine.addEntity(forma)
engine.addEntity(forma2)
engine.addEntity(forma3)
engine.addEntity(forma4)
engine.addEntity(forma5)
engine.addEntity(forma6)
engine.addEntity(forma7)
engine.addEntity(forma8)
engine.addEntity(forma9)
engine.addEntity(forma10)
engine.addEntity(forma11)
engine.addEntity(forma12)
engine.addEntity(forma13)
engine.addEntity(forma14)
engine.addEntity(forma15)
engine.addEntity(forma16)
engine.addEntity(forma17)
engine.addEntity(forma18)
engine.addEntity(forma19)
engine.addEntity(forma20)
engine.addEntity(inters)
engine.addEntity(thanks)
 
 
 
 
//TITULO
testSh.addComponent(new TextShape("Ezequiel Porco CV"))
testSh.getComponent(TextShape).shadowOffsetY = 2
//testSh.getComponent(TextShape).shadowBlur = 0.1
testSh.getComponent(TextShape).shadowColor =Color3.Black()
testSh.getComponent(TextShape).color =Color3.White()
testSh.getComponent(TextShape).fontSize=20
 
testSh.addComponent(new Transform({ position: new Vector3(10, 4, 5) }))
 
//BRIEF
brief.addComponent(new TextShape("Brief Presentation"))
brief.getComponent(TextShape).fontSize=8
brief.getComponent(TextShape).shadowOffsetY = 2
brief.getComponent(TextShape).shadowBlur = 0.5
brief.getComponent(TextShape).shadowColor =Color3.White()
brief.getComponent(TextShape).color =Color3.Black()
 
brief.addComponent(new Transform({ position: new Vector3(10, 15, 55) }))
 
 
 
//SUB BRIEF
sub_brief.addComponent(new TextShape("A human being with eight years of experience in QA\n with some algorithmical courses done and different interests. \n   Knowledge in SDLC from differents perspectives like team, client or user.\n Experience in the most used tools and process in industry,\n    from Manage tools to Testing tools "))
sub_brief.getComponent(TextShape).fontSize = 6
sub_brief.getComponent(TextShape).shadowOffsetY = 2
sub_brief.getComponent(TextShape).shadowColor =Color3.White()
sub_brief.getComponent(TextShape).color =Color3.Black()
 
sub_brief.addComponent(new Transform({ position: new Vector3(10, 11, 55) }));
 
//EDUCATION BACKGROUND
studies.addComponent(new TextShape("Educational background"))
studies.getComponent(TextShape).fontSize = 8
studies.getComponent(TextShape).shadowOffsetY = 5
studies.getComponent(TextShape).shadowOffsetX = -2
studies.getComponent(TextShape).shadowBlur = 0.5
studies.getComponent(TextShape).shadowColor = Color3.White()
studies.getComponent(TextShape).color = Color3.Black()
 
studies.addComponent(new Transform({ position: new Vector3(10, 15, 80) }));
 
//TECHSTACK
techstack.addComponent(new TextShape("QA, Scrum Master Certified. RSK Certified. \nI have assisted to different development courses like ABAP, Java,\n Python and now just because I like challenges, \nventuring into the field of web3, Solidity and Smart Contracts "))
techstack.getComponent(TextShape).fontSize = 6
techstack.getComponent(TextShape).shadowOffsetY = 2
techstack.getComponent(TextShape).shadowColor =Color3.White()
techstack.getComponent(TextShape).color =Color3.Black()
 

techstack.addComponent(new Transform({ position: new Vector3(10, 11, 80) }));

//interests
 
interest.addComponent(new TextShape("Interests"))
interest.getComponent(TextShape).fontSize = 8
interest.getComponent(TextShape).shadowOffsetY = 5
interest.getComponent(TextShape).shadowOffsetX = -2
interest.getComponent(TextShape).shadowBlur = 0.5
interest.getComponent(TextShape).shadowColor =Color3.White()
interest.getComponent(TextShape).color =Color3.Black()

interest.addComponent(new Transform({ position: new Vector3(10, 14, 100) }));

 
inters.addComponent(new TextShape("- Keep learning\n- Coding\n- New technologies\n- Blockchain\n - New ideas to solve commmon problems\n- Nature\n"))
inters.getComponent(TextShape).fontSize = 6
inters.getComponent(TextShape).shadowOffsetY = 5
inters.getComponent(TextShape).shadowOffsetX = -2
inters.getComponent(TextShape).shadowBlur = 0.5
inters.getComponent(TextShape).shadowColor =Color3.White()
inters.getComponent(TextShape).color =Color3.Black()

inters.addComponent(new Transform({ position: new Vector3(10, 11, 100) }));



//thanks

thanks.addComponent(new TextShape("Thanks!\nhope you enjoyed it :)"))
thanks.getComponent(TextShape).fontSize = 12
thanks.getComponent(TextShape).shadowOffsetY = 5
thanks.getComponent(TextShape).shadowOffsetX = -2
thanks.getComponent(TextShape).shadowBlur = 0.5
thanks.getComponent(TextShape).shadowColor =Color3.White()
thanks.getComponent(TextShape).color =Color3.Black()

thanks.addComponent(new Transform({ position: new Vector3(10, 12, 150) }));

//Spheres -
 
// Spheres starting position
forma.addComponent(new Transform({ position: new Vector3(15, 5, 20) }))
forma2.addComponent(new  Transform({ position: new Vector3(13, 4, 20)}))
forma3.addComponent(new  Transform({ position: new Vector3(3, 5, 20)}))//
forma4.addComponent(new Transform({position: new Vector3(0, 6 , 20)}))
forma5.addComponent(new Transform({position: new Vector3(5 ,5 , 50)}))
forma6.addComponent(new Transform({position: new Vector3(6 ,4 , 50)}))//
forma7.addComponent(new Transform({position: new Vector3(8 ,5, 50)}))
forma8.addComponent(new Transform({position: new Vector3(2 ,6 , 50)}))
forma9.addComponent(new Transform({position: new Vector3(25 ,3 , 80)}))
forma10.addComponent(new Transform({position: new Vector3(1 ,4 , 82)}))
forma11.addComponent(new Transform({position: new Vector3(9 ,5, 80)}))
forma12.addComponent(new Transform({position: new Vector3(50 ,4 , 80)}))
forma13.addComponent(new Transform({position: new Vector3(10 ,3 , 110)}))
forma14.addComponent(new Transform({position: new Vector3(7 ,3, 110)}))
forma15.addComponent(new Transform({position: new Vector3(11 ,3, 120)}))
forma16.addComponent(new Transform({position: new Vector3(4 ,2 , 150)}))//
forma17.addComponent(new Transform({position: new Vector3(6, 3 , 150)}))//
forma18.addComponent(new Transform({position: new Vector3(6,2 , 160)}))
forma19.addComponent(new Transform({position: new Vector3(10 ,2 , 160)}))//
forma20.addComponent(new Transform({position: new Vector3(11 ,2 , 160)}))
 
 
// Blue Sphere
//Create material and configure its fields
const myMaterial = new Material()
myMaterial.albedoColor = Color3.Blue()
//Assign the material to the entity
forma.addComponent(myMaterial)
 
 
//Yellow Sphere
//Create material and configure its fields
const myMaterial2 = new Material()
myMaterial2.albedoColor = Color3.Red()
//Assign the material to the entity
forma2.addComponent(myMaterial2)
 
// Blue Sphere
//Create material and configure its fields
const myMaterial3 = new Material()
myMaterial3.albedoColor = Color3.Magenta()
//Assign the material to the entity
forma3.addComponent(myMaterial3)
 
// Purple Sphere
//Create material and configure its fields
const myMaterial4 = new Material()
myMaterial4.albedoColor = Color3.Red()
//Assign the material to the entitys
forma4.addComponent(myMaterial4)
 
 
// Blue Sphere
//Create material and configure its fields
const myMaterial5 = new Material()
myMaterial5.albedoColor = Color3.White()
//Assign the material to the entity
forma5.addComponent(myMaterial5)
 
//Create material and configure its fields
const myMaterial6 = new Material()
myMaterial6.albedoColor = Color3.Yellow()
//Assign the material to the entity
forma6.addComponent(myMaterial6)
 
 
//Create material and configure its fields
const myMaterial7 = new Material()
myMaterial7.albedoColor = Color3.Yellow()
//Assign the material to the entity
forma7.addComponent(myMaterial7)
 
 
//Create material and configure its fields
const myMaterial8 = new Material()
myMaterial8.albedoColor = Color3.Magenta()
//Assign the material to the entity
forma8.addComponent(myMaterial8)
 
 
 
//Create material and configure its fields
const myMaterial9 = new Material()
myMaterial9.albedoColor = Color3.Magenta()
//Assign the material to the entity
forma9.addComponent(myMaterial9)
 
 
//Create material and configure its fields
const myMaterial10 = new Material()
myMaterial10.albedoColor = Color3.Red()
//Assign the material to the entity
forma10.addComponent(myMaterial10)
 
///////////////////
 
//Create material and configure its fields
const myMaterial11 = new Material()
myMaterial11.albedoColor = Color3.Blue()
//Assign the material to the entity
forma11.addComponent(myMaterial11)
 
//Create material and configure its fields
const myMaterial12 = new Material()
myMaterial.albedoColor = Color3.Blue()
//Assign the material to the entity
forma12.addComponent(myMaterial12)
 
//Create material and configure its fields
const myMaterial13 = new Material()
myMaterial13.albedoColor = Color3.Magenta()
//Assign the material to the entity
forma13.addComponent(myMaterial13)
 
//Create material and configure its fields
const myMaterial14 = new Material()
myMaterial14.albedoColor = Color3.Blue()
//Assign the material to the entity
forma14.addComponent(myMaterial14)
 
 
//Create material and configure its fields
const myMaterial15 = new Material()
myMaterial15.albedoColor = Color3.Red()
//Assign the material to the entity
forma15.addComponent(myMaterial15)
 
 
//Create material and configure its fields
const myMaterial16 = new Material()
myMaterial16.albedoColor = Color3.Yellow()
//Assign the material to the entity
forma16.addComponent(myMaterial16)
 
//Create material and configure its fields
const myMaterial17 = new Material()
myMaterial17.albedoColor = Color3.White()
//Assign the material to the entity
forma17.addComponent(myMaterial17)
 
 
//Create material and configure its fields
const myMaterial18 = new Material()
myMaterial18.albedoColor = Color3.Blue()
//Assign the material to the entity
forma18.addComponent(myMaterial18)
 
 
 
//Create material and configure its fields
const myMaterial19 = new Material()
myMaterial19.albedoColor = Color3.Green()
//Assign the material to the entity
forma19.addComponent(myMaterial19)
 
 
//Create material and configure its fields
const myMaterial20 = new Material()
myMaterial20.albedoColor = Color3.Red()
//Assign the material to the entity
forma20.addComponent(myMaterial20)
 
 
 
// Spheres Movement
 
export class SimpleMove1 implements ISystem {
  update() {
    let transform = forma.getComponent(Transform)
    let distance = Vector3.Up().scale(0.07)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove1())
 
 
export class SimpleMove2 implements ISystem {
  update() {
    let transform = forma2.getComponent(Transform)
    let distance = Vector3.Up().scale(0.003)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove2())
 
 
export class SimpleMove3 implements ISystem {
  update() {
    let transform = forma3.getComponent(Transform)
    let distance = Vector3.Up().scale(0.005)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove3())
 
// Sphere 4
export class SimpleMove4 implements ISystem {
  update() {
    let transform = forma4.getComponent(Transform)
    let distance = Vector3.Up().scale(0.004)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove4())
 
// 5
export class SimpleMove5 implements ISystem {
  update() {
    let transform = forma5.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove5())
 
//6
export class SimpleMove6 implements ISystem {
  update() {
    let transform = forma6.getComponent(Transform)
    let distance = Vector3.Up().scale(0.009)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove6())
 
 
export class SimpleMove7 implements ISystem {
  update() {
    let transform = forma7.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove7())
 
export class SimpleMove8 implements ISystem {
  update() {
    let transform = forma8.getComponent(Transform)
    let distance = Vector3.Up().scale(0.009)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove8())
 
export class SimpleMove9 implements ISystem {
  update() {
    let transform = forma9.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove9())
 
 
 
export class SimpleMove10 implements ISystem {
  update() {
    let transform = forma10.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove10())
 
 
 
 
export class SimpleMove11 implements ISystem {
  update() {
    let transform = forma11.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove11())
 
 
 
export class SimpleMove12 implements ISystem {
  update() {
    let transform = forma12.getComponent(Transform)
    let distance = Vector3.Up().scale(0.009)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove12())
 
 
 
 
export class SimpleMove13 implements ISystem {
  update() {
    let transform = forma13.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove13())
 
 
 
export class SimpleMove14 implements ISystem {
  update() {
    let transform = forma14.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove14())
 
 
 
export class SimpleMove15 implements ISystem {
  update() {
    let transform = forma15.getComponent(Transform)
    let distance = Vector3.Up().scale(0.009)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove15())
 
 
 
 
export class SimpleMove16 implements ISystem {
  update() {
    let transform = forma16.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove16())
 
 
 
export class SimpleMove17 implements ISystem {
  update() {
    let transform = forma17.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove17())
 
 
 
 
 
export class SimpleMove18 implements ISystem {
  update() {
    let transform = forma18.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove18())
 
 
 
 
export class SimpleMove19 implements ISystem {
  update() {
    let transform = forma19.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove19())
 
 
export class SimpleMove20 implements ISystem {
  update() {
    let transform = forma20.getComponent(Transform)
    let distance = Vector3.Up().scale(0.01)
    transform.translate(distance)
  }
}
 
engine.addSystem(new SimpleMove20())
 
 
 
// Spheres
forma.addComponent(box)
forma.getComponent(BoxShape)
forma2.addComponent(box)
forma2.getComponent(BoxShape)
forma3.addComponent(box)
forma3.getComponent(BoxShape)
forma4.addComponent(box)
forma4.getComponent(BoxShape)
forma5.addComponent(box)
forma5.getComponent(BoxShape)
forma6.addComponent(box)
forma6.getComponent(BoxShape)
forma7.addComponent(box)
forma7.getComponent(BoxShape)
forma8.addComponent(box)
forma8.getComponent(BoxShape)
forma9.addComponent(box)
forma9.getComponent(BoxShape)
forma10.addComponent(box)
forma10.getComponent(BoxShape)
forma11.addComponent(box)
forma11.getComponent(BoxShape)
forma12.addComponent(box)
forma12.getComponent(BoxShape)
 
forma13.addComponent(box)
forma13.getComponent(BoxShape)
 
forma14.addComponent(box)
forma14.getComponent(BoxShape)
 
forma15.addComponent(box)
forma15.getComponent(BoxShape)
 
 
forma16.addComponent(box)
forma16.getComponent(BoxShape)
 
 
forma17.addComponent(box)
forma17.getComponent(BoxShape)
 
 
forma18.addComponent(box)
forma18.getComponent(BoxShape)
 
 
forma19.addComponent(box)
forma19.getComponent(BoxShape)
 
 
forma20.addComponent(box)
forma20.getComponent(BoxShape)
 

