import { Component, OnInit } from '@angular/core'
import { VendingMachineService } from '../service/vending-machine.service'

@Component({
  selector: 'app-selected-snack',
  templateUrl: './selected-snack.component.html',
  styleUrls: ['./selected-snack.component.css']
})
export class SelectedSnackComponent implements OnInit {

  constructor(public vendingService: VendingMachineService) { }

  ngOnInit(): void {
  }

}
