import { Routes } from '@angular/router';
import {ListProductComponent} from "./album/list-product/list-product.component";

export const routes: Routes = [
  {path: '/', pathMatch:"full" ,component:ListProductComponent},

];
