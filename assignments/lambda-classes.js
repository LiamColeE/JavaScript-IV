// CODE here for your Lambda Classes
class Person{
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }

    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }

    listsSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(PMAttrs){
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }

    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standup times!`);
    }

    debugCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const Cameron = new Instructor({
    name: "Cameron Pope",
    age: 30,
    location: "PotatoVille",
    specialty: "Being Awesome",
    favLanguage: "CSS",
    catchPhrase: "yeet"
});

const Dan = new Instructor({
    name: "Dan Frehner",
    age: 28,
    location: "Lambda School",
    specialty: "Being Cam's replacement instructor",
    favLanguage: "javascript",
    catchPhrase: "Have a nice day!"
});

const Jacob = new ProjectManager({ 
    name: "Jacob Angulo",
    age: 24,
    location: "MiniSoda",
    specialty: "Being The Best PM",
    favLanguage: "Python",
    catchPhrase: "STANDUP TIME!",
    gradClassName: "CS1",
    favInstructor: "Dan Frehner"
});

const Sasha = new ProjectManager({ 
    name: "Sasha Taylor",
    age: 25,
    location: "KnowWhere",
    specialty: "coming in clutch when jacob isnt here",
    favLanguage: "Java",
    catchPhrase: "Hey guys Jacob will be out today",
    gradClassName: "CS5",
    favInstructor: "Cameron Pope"
});

const Liam = new Student({
    name: "Liam Edlinger",
    age: 20,
    location: "Utah",
    previousBackground: "CS stuff but no credentials so sad",
    className: "WebPT7",
    favSubjects: ["CS", "webdev", "potato"],
})

const Patrick = new Student({
    name: "Patrick Shushereba",
    age: 23,
    location: "SumWhere",
    previousBackground: "IDK",
    className: "WebPT7",
    favSubjects: ["WebDev", "computer stuffs", "potato"],
})

Liam.listsSubjects();
Patrick.listsSubjects();

Liam.speak();
Patrick.speak();

Liam.sprintChallenge("Javascript Fundamentals");
Patrick.sprintChallenge("Javascript Fundamentals");

Jacob.speak();
Sasha.speak();

Jacob.standUp("Webpt7_Jacob");
Sasha.standUp("Webpt7_Jacob");

Jacob.grade(Liam, "CS Stuff");
Sasha.grade(Patrick, "Web Dev");

Jacob.demo("Javascript");
Sasha.demo("CSS");

Jacob.debugCode(Liam, "Potatoes");
Sasha.debugCode(Patrick, "Computering");

Dan.speak();
Cameron.speak();

Dan.demo("React");
Cameron.demo("PreProccesing");

Dan.grade(Liam, "unreadable code");
Cameron.grade(Patrick, "learning real good");

console.log(`${Liam.name}, ${Liam.age}, ${Liam.className}, ${Liam.location}, ${Liam.previousBackground}`)
console.log(`${Patrick.name}, ${Patrick.age}, ${Patrick.className}, ${Patrick.location}, ${Patrick.previousBackground}`)

console.log(`${Dan.name}, ${Dan.age}, ${Dan.catchPhrase}, ${Dan.favLanguage}, ${Dan.location}, ${Dan.specialty}`);
console.log(`${Cameron.name}, ${Cameron.age}, ${Cameron.catchPhrase}, ${Cameron.favLanguage}, ${Cameron.location}, ${Cameron.specialty}`);

console.log(`${Jacob.name}, ${Jacob.age}, ${Jacob.catchPhrase}, ${Jacob.favLanguage}, ${Jacob.location}, ${Jacob.specialty}, ${Jacob.favInstructor}, ${Jacob.gradClassName}`);
console.log(`${Sasha.name}, ${Sasha.age}, ${Sasha.catchPhrase}, ${Sasha.favLanguage}, ${Sasha.location}, ${Sasha.specialty}, ${Sasha.favInstructor}, ${Sasha.gradClassName}`);