export abstract class Coin{
    //value: number /not needed when using the access modifier in the constructor
    constructor(public Value: number){
        this.Value = Value
    }
    abstract getImageUrl(): string
}

export class Quarter extends Coin{
    constructor(){
        super(.25)
    }
    getImageUrl(){
        return "assets/img/Quarter.png"
    }
}

export class Dime extends Coin{
    constructor(){
        super(.10)
    }
    getImageUrl(){
        return "assets/img/Dime.png"
    }
}

export class Half extends Coin{
    constructor(){
        super(.50)
    }
    getImageUrl(){
        return "assets/img/Half.png"
    }
}

export class Dollar extends Coin{
    constructor(){
        super(1)
    }
    getImageUrl(){
        return "assets/img/Dollar.jpg"
    }
}
