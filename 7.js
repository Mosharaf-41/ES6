// inheritance.... , extends ..., super class ...

class Parent {
    constructor(){
        this.fatherName = "Aminul islam";
    }
}
class Child  extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName (){
        return this.name + " " +this.fatherName;
    }
}

const baby = new Child("Habib");
const baby2 = new Child("Milu");
console.log(baby.getFullName());
console.log(baby2.getFullName());