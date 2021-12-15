import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PickNumbersComponent } from './pick-numbers/pick-numbers.component';
import { PickAmountComponent } from './pick-amount/pick-amount.component';
import { DisplaySelectionComponent } from './display-selection/display-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PickNumbersComponent,
    PickAmountComponent,
    DisplaySelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
