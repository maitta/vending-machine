import { Component, Input, OnInit } from '@angular/core'
import { Coin } from '../models/coin'
import { VendingMachineService } from '../service/vending-machine.service'

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  @Input() coin!: Coin

  constructor(public vendingService: VendingMachineService) { }

  ngOnInit(): void {
  }

  insertCoin(){
    console.log(this.coin)
    this.vendingService.insertCoin(this.coin)
  }
}
