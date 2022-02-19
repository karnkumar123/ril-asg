import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit, AfterContentInit {
  stockDetails = [
    {stock: 'Low Stock Variants', percentage: '30%'},
    {stock: 'Surplus', percentage: '27%'},
    {stock: 'All Variants', percentage: '43%'}
  ]

  ngOnInit(): void {    
  }


  ngAfterContentInit(): void {
    const canvas = <HTMLCanvasElement>document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    const myChart: any = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [{
          data: [27, 43, 30],
          backgroundColor: [
            'rgb(0, 102, 255)',
            'rgb(51, 204, 51)',
            'rgb(255, 153, 51)'
          ],
          borderWidth: 1
        }]
      }
    });
    canvas.height= 100;
  }

}
