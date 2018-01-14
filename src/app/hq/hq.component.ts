import { Component, OnInit } from '@angular/core';

import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-hq',
  templateUrl: './hq.component.html',
  styleUrls: ['./hq.component.css']
})
export class HqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  teamName = "The Extream"
  budget = 50000

}
