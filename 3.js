//Template String , Multiple line string ....

const firstName = "Siam";
const lastName = "Ayman";
const fullName = firstName + " " +lastName + " is a good boy.";
const fullName2 = `${firstName} ${lastName} is a good boy.`; // using template ....
const fullName3 = `${firstName} ${20+30+40} is a good boy.`; 

const multiLine = "I love you\n "
+ "I miss you\n"
+ " I need you"; // before using template............
console.log(multiLine);
const multiLine1 = `I love you  
I miss you 
I need you ....`; // using template ....
console.log(multiLine1);