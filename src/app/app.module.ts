import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { SnackComponent } from './snack/snack.component'
import { CoinComponent } from './coin/coin.component'
import { VendingMachineSize as size } from './service/vending-machine.service'
import { SelectedSnackComponent } from './selected-snack/selected-snack.component'
import { PaymentComponent } from './payment/payment.component'

@NgModule({
  declarations: [
    AppComponent,
    SnackComponent,
    CoinComponent,
    SelectedSnackComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: 'size', useValue: size.medium}],
  bootstrap: [AppComponent]
})
export class AppModule { }
