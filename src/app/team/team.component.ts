import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { TEAM } from '../team';
import { RECRUITS } from '../recruits';
import { AVAILABLE } from '../available';

 
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
	team = TEAM;
	recruits = RECRUITS;
	available = AVAILABLE;
	selectedHeroTeam: Hero;
	selectedHeroRecruit: Hero;
	curTab = 'team';
	
	onSelectTeam(hero: Hero): void {
		this.selectedHeroTeam = hero;
	}
	
	onSelectRecruit(hero: Hero): void {
		//console.log(hero);
		this.selectedHeroRecruit = hero;
		console.log(this.selectedHeroRecruit);
	}
	
	setTab(tab: string): void {
		if(tab=='team'){
			this.curTab = tab;
		} else {
			this.curTab = tab;
		}
	}
	
	addToTeam(hero: Hero): void {
		console.log(hero);
		this.team.push(this.selectedHeroRecruit);
		this.available.push(this.selectedHeroRecruit);
		this.recruits.splice(this.recruits.indexOf(this.selectedHeroRecruit),1);
		this.selectedHeroRecruit = null;
		this.sortLists();
		console.log(this.selectedHeroRecruit);
	}
	
	sortLists(): void {
		this.available.sort(function(a, b){
			var keyA = a.id,
			keyB = b.id;
			if(keyA < keyB) return -1;
			if(keyA > keyB) return 1;
			return 0;
		});
		this.team.sort(function(a, b){
			var keyA = a.id,
			keyB = b.id;
			if(keyA < keyB) return -1;
			if(keyA > keyB) return 1;
			return 0;
		});
	}

  constructor() { }

  ngOnInit() {
  }

}
