class Human {
    name= ''
    grade= 100

    constructor(name){
        this.name = name // in order to check to see which name variable is being called // command + click on the variable and it will run up to the one we are referring to 
    }

    sayHi () {
        return `my name is ${this.name} `
    }

}

class Teacher extends Human {
    currentlyTeaching = 'yes'
    sayHi () {
        return `Hi, I am professor ${this.name} `
    }

}

let student1= new Student ('Bobby')
let teacher= new Teacher('Jennifer')

console.log(student1.name)
console.log(student1.sayHi())
