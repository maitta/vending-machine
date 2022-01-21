import { Component, OnInit } from '@angular/core'

import { Coin } from '../models/coin'
import { VendingMachineService } from '../service/vending-machine.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  coins!: Coin[]

  constructor(public vendingService: VendingMachineService) { }

  ngOnInit(): void {
    this.coins = this.vendingService.acceptedCoins
  }

}
