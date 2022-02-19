import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  menuItems: string[] = [
    'Dashboard', 'Tasks and Assignment', 'Stocks', 'Sale', 'Purchase', 'Productions', 'Reports'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
