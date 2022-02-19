import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { LeftPanelComponent } from './main/left-panel/left-panel.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SalesActivityComponent } from './main/dashboard/sales-activity/sales-activity.component';
import { TaskComponent } from './main/dashboard/task/task.component';
import { TopSellingVariantComponent } from './main/dashboard/top-selling-variant/top-selling-variant.component';
import { ProductsComponent } from './main/dashboard/products/products.component';
import { StockDetailsComponent } from './main/dashboard/stock-details/stock-details.component';
import {NgChartsModule} from 'ng2-charts';
import { OthersComponent } from './main/others/others.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: OthersComponent}
];


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    LeftPanelComponent,
    DashboardComponent,
    SalesActivityComponent,
    TaskComponent,
    TopSellingVariantComponent,
    ProductsComponent,
    StockDetailsComponent,
    OthersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgChartsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [MainComponent]
})
export class RilAsgModule { }
