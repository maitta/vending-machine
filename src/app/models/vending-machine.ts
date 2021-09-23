
import{ Snack, Initial as Init } from "./snack"
import getVendingProduct from "./snack-factory"
import * as Coins from "./coin"


export enum VendingMachineSize{
    small = 6,
    medium = 9,
    large = 12
}

let ko = { 
    observable: function(arg: any){ return () => {
        return {product: {price: 1}, stock: () => 0}}
    },
    observableArray: function(arg: any[]){return () => 0},
    pureComputed: function(arg: any){}
}

class Cell{
    constructor (public product: Snack){

    }
    stock = ko.observable(3)
    sold = ko.observable(false)
}

export class VendingMachine{
    private paid = ko.observable(0)
    static acceptedCoins: Coins.Coin[] = [new Coins.Dollar(), new Coins.Half(), new Coins.Quarter(), new Coins.Dime()]
    cells = ko.observableArray([])
    selectedCell = ko.observable(new Cell(new Init()))
    canPay = ko.pureComputed(() => /*this.paid()*/ 0 - this.selectedCell().product.price >= 0)

    set size(givenSize: VendingMachineSize){
        //this.cells([])
        for (let index = 0; index < givenSize; index++) {
            let product = getVendingProduct()
            //this.cells.push(new Cell(product))
        }
    }

    acceptCoin = (coin: Coins.Quarter): void => {
        let oldTotal = this.paid()
        //this.paid(oldTotal + coin.Value)
    }

    select = (cell: Cell): void => {
        //cell.sold(false)
        //this.selectedCell(cell)
    }

    pay = (): void => {
        if(this.selectedCell().stock() < 1){
            alert("Sold out")
            return
        }
        let currentPaid = this.paid()
        //this.paid((Math.round((currentPaid - this.selectedCell().product.price) * 100))/100)
        //let currentStock = this.selectedCell().stock()
        //this.selectedCell().stock(currentStock - 1)
        //this.selectedCell().sold(true)
    }
}