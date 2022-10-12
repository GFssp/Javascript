class Person {
    constructor(name){
        this.name = name
    }
    walk() {
        console.log("walk");
    }
}

class Teacher extends Person{
    constructor(name, degree){
        super(name)
        this.degree = degree
    }

    teach(){
        console.log("teach")
    }
}

const person = new Person('Mo Lester')
const t = new Teacher('Daniel', 'Master Science')
