import { Component, OnInit } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { COMPANY } from '../company';

@Component({
  selector: 'app-hq',
  templateUrl: './hq.component.html',
  styleUrls: ['./hq.component.css']
})
export class HqComponent implements OnInit {
	company = COMPANY;
  constructor() { }

  ngOnInit() {
  }
  
  teamName = this.company.name;
  budget = this.company.money;

}
