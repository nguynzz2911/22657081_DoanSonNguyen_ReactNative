class Person{
    constructor(public name:string, public age: number){}

    display(): void{
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

const p1 = new Person("Nguyen",20)
p1.display()