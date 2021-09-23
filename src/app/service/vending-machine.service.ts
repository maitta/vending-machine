import { Inject, Injectable } from '@angular/core'


import{ Snack, Initial as Init, Initial } from "../models/snack"
import getVendingProduct from "../models/snack-factory"
import * as Coins from "../models/coin"
import getSnack from '../models/snack-factory'

export enum VendingMachineSize{
  small = 12,
  medium = 16,
  large = 20
}


@Injectable({
  providedIn: 'root'
})
export class VendingMachineService {

  private _snacks: Snack[] = []
  private _acceptedCoins: Coins.Coin[] = [new Coins.Dollar(), new Coins.Half(), new Coins.Quarter(), new Coins.Dime()]
  private _credit: number = 0
  private _selectedSnack: Snack = new Initial()

  constructor(@Inject('size') private size: number) {
    for (let index = 0; index < size; index++) {
      const snack = getSnack()
      this._snacks.push(snack)
    }
  }

  public get snacks(): Snack[]{
    return this._snacks
  }

  public get acceptedCoins(): Coins.Coin[]{
    return this._acceptedCoins;
  }

  public select(snack: Snack): void {
    this.deselect()
    const s = this._snacks.find(x => x === snack)    
    if(s) {
      s.selected = true
      //this._selectedSnack = s
    }
    
  }
  
  public deselect(): void {
    // get current selected item and toggle it
    const s = this._snacks.find(x => x.selected)
    if(s) s.selected = false
  }

  public getSelected(): Snack{
    let s = this._snacks.find(x => x.selected)
    if(s) { 
      this._selectedSnack = s
    }else{
      s = new Initial()
    }
    return s
  }

  public insertCoin(coin: Coins.Coin): void{
    this._credit += coin.Value
  }

  public get credit(): number{
    return parseFloat(this._credit.toFixed(2))
  }

  /**
   * 
   * @returns true if there's a selection and credit is equal or greater than its price
   */
  public canPay(): boolean{
    return !(this._selectedSnack instanceof Initial) && this._credit >= this._selectedSnack.price
  }

  public pay(): void{
    this._credit = this._credit - this._selectedSnack.price
    this._selectedSnack.stock--;
    this._selectedSnack.selected = false    
    this._selectedSnack.dropIt = true
    const sel = this._selectedSnack
    setInterval(() => sel.dropIt = false, 7000)
  }

}

