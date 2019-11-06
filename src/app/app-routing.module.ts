import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrdersComponent } from './components/work-orders/work-orders.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

const routes: Routes = [
  { path: 'work-orders', component: WorkOrdersComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
