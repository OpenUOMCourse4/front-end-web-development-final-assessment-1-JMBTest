import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';

const routes: Routes = [
  { path: 'product', component: ProductsComponent },
  { path: 'product-detail-view/:id', component: ViewProductDetailsComponent },
  { path: '', component: SuppliersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
