import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkOrderComponent } from './components/work-order/work-order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WorkOrdersComponent } from './components/work-orders/work-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkOrderComponent,
    NotFoundComponent,
    WorkOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
