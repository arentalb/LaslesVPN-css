import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DataComponent } from './data/data.component';
import { FeaturesComponent } from './features/features.component';
import { PlanComponent } from './plan/plan.component';
import { NetworkComponent } from './network/network.component';
import { CustmerComponent } from './custmer/custmer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    DataComponent,
    FeaturesComponent,
    PlanComponent,
    NetworkComponent,
    CustmerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
