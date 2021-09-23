import { Component, Input, OnInit } from '@angular/core';

import { Snack } from '../models/snack';
import { VendingMachineService } from '../service/vending-machine.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit {

  @Input() snack!: Snack;

  constructor(public vendingService: VendingMachineService) { }

  ngOnInit(): void {
  }

  select(){
    this.vendingService.select(this.snack)
  }

}
