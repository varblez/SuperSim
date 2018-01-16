import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { TEAM } from '../team';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
	team = TEAM;
	selectedHero: Hero;
	
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	

  constructor() { }

  ngOnInit() {
  }

}
