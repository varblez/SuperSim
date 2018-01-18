import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {TEAM } from '../team';
import { MissionComponent } from '../mission/mission.component';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
	team = TEAM;
	selectedHero: Hero;
	assigned = this.team.slice();
  constructor() { }
  
  /* TODO: move all this crap into a service*/
	addToMission(hero: Hero): void {
		if(this.assigned.indexOf(hero) == -1){
			this.assigned.push(hero);
		}
	}
	removeFromMission(hero: Hero): void {
		for(var i = 0; i< this.assigned.length; i++){
			
			if(hero==this.assigned[i]){
				this.assigned.splice(i,1);
				
			}
		}
	}
	
	run(): void {
		for(var i=0; i<this.assigned.length; i++){
			
			this.assigned[i].experience+=1;
			if (this.assigned[i].exhaustion<100){
				this.assigned[i].exhaustion+=10;
			} else {
				this.assigned[i].exhaustion=100;
			}
		}
		for(var i=0; i<this.team.length; i++){
			var present = true;
			for(var j=0; j<this.assigned.length; j++){
				if(this.team[i]==this.assigned[j]){
					present = false;
				}
			}
			if(present){
				if(this.team[i].exhaustion>5){
					this.team[i].exhaustion+= -5;
				} else {
					this.team[i].exhaustion=0;
				}
			}
		}
	}
	
  ngOnInit() {
		this.assigned.length=0;
  }

}
