import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignOrderFormComponent } from './design-order-form/design-order-form.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'order', component: DesignOrderFormComponent},
  { path: '', component: PortfolioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
