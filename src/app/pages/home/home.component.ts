import { Component } from '@angular/core';
import {SlideHomeComponent} from "../../shared/slide-home/slide-home.component";
import {ListProductComponent} from "../../album/list-product/list-product.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideHomeComponent, ListProductComponent],
  template: `
    <app-slide-home></app-slide-home>
    <app-list-product></app-list-product>
  `,
  styles: ``
})
export class HomeComponent {

}
