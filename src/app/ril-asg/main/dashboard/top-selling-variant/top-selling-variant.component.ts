import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-selling-variant',
  templateUrl: './top-selling-variant.component.html',
  styleUrls: ['./top-selling-variant.component.css']
})
export class TopSellingVariantComponent implements OnInit {

  sellingVariants = [
    {title: 'Arbutus', name: 'Marina', value: 25},
    {title: 'Sempervirens', name: 'Buxus', value: 25},
    {title: 'Camellia', name: 'Jab Purity', value: 25},
    {title: 'Betula', name: 'Utilis', value: 25}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
