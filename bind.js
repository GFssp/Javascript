const person = {
    name: "John",
    // Walk method
    walk() {
        console.log(this);
    }
}

person.walk()

// Atribute walk access to global scope
const walk = person.walk.bind(person)
// that way, i can use as static method
walk()