import { Component, Inject, OnInit } from '@angular/core';

import { Snack } from './models/snack';
import { VendingMachineService } from './service/vending-machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Vending Machine'

  snacks: Snack[] = []

  constructor(public vendingService: VendingMachineService){
  }

  ngOnInit(): void {
    this.snacks = this.vendingService.snacks
  }
}

