// Class, Constructor,  create object from class.....

class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Babki school";
    }
}

const student1 = new Student(12, "Ayman");
const student2 = new Student(7, "Siam");
const student3 = new Student(8, "Faruq");

// console.log(student1,student2);
// console.log(student1.name,student2.name);
console.log(student3);
