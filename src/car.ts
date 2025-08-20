class Car{
    constructor(public brand:string, public model: string, public year:number){}

    display(): void{
        console.log(`Brand: ${this.brand}  Model:${this.model}  Year:${this.year}`)
    }
}
