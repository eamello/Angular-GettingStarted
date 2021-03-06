import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard] , component: ProductDetailComponent }
    ]),
    SharedModule
  ],
  declarations : [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe

  ]
})
export class ProductModule { }
