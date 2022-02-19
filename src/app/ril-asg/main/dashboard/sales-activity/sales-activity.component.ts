import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-activity',
  templateUrl: './sales-activity.component.html',
  styleUrls: ['./sales-activity.component.css']
})
export class SalesActivityComponent implements OnInit {

  salesActivityArray = [
    {saleActivity: 'New Order', salesStatus: '15% from this yesterday', value: 29},
    {saleActivity: 'To Be shipped', salesStatus: '15% from this yesterday', value: 35},
    {saleActivity: 'To Be Invoiced', salesStatus: '15% from this yesterday', value: 17},
    {saleActivity: 'To Be Delivered', salesStatus: '15% from this yesterday', value: 24}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
