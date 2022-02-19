import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsImageUrl = [
    '../../../../../assets/Asset 2.png',
    '../../../../../assets/Asset 4.png',
    '../../../../../assets/Asset 5.png',
    '../../../../../assets/Asset 3.png',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
