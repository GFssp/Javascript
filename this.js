// return a instance of object in dict
const person = {
    talk(){
        setTimeout(() => {
            console.log("this", this)
        }, 1000)
    }
}

person.talk()