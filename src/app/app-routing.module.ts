import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ProductManagerComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'manager', component: ProductManagerComponent},
  { path: 'list', component: ProductListComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'add', component: ProductAddComponent},
  { path: '404', component: ErrorComponent},
   { path: '**', redirectTo:'404', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
