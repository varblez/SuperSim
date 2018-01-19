import { Component, OnInit } from '@angular/core';

import { Mission } from '../mission';
import { MISSIONS } from '../mission-list';
import { DifficultyPipe } from '../difficulty.pipe';
import { Hero } from '../hero';
import { TEAM } from '../team';
import { AVAILABLE } from '../available';

@Component({
  selector: 'app-mission', 
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
	
	missions = MISSIONS;
	selectedMission: Mission;
	team = TEAM;
	selectedHero: Hero;
	available = AVAILABLE;
	
	
	onSelect(mission: Mission): void {
		this.selectedMission = mission;
	}
	
	addToMission(hero: Hero): void {
		this.selectedMission.assignedHeroes.push(hero);
		for(var i = 0; i< this.available.length; i++){
			
			if(hero==this.available[i]){
				this.available.splice(i,1);
				
			}
		}
		this.sortLists();
		this.team[this.team.indexOf(hero)].status = 'commited to '+this.selectedMission.name;

		
		
	}
	removeFromMission(hero: Hero): void {
		for ( var i=0; i<this.missions.length;i++) {
			for ( var j=0; j<this.missions[i].assignedHeroes.length;j++) {
				if(hero==this.missions[i].assignedHeroes[j]){
					this.missions[i].assignedHeroes.splice(j,1);
				}
			}			
		}
		this.available.push(hero);
		this.sortLists();
		
		this.team[this.team.indexOf(hero)].status = 'free';
		
	}
	run(): void {
		for ( var i=0; i<this.missions.length;i++) {
			console.log(this.missions[i]);
			for ( var j=0; j<this.missions[i].assignedHeroes.length;j++) {
				console.log(j);
				var hero = this.missions[i].assignedHeroes[j];
				console.log(hero);
				this.runHero(hero);
				this.available.push(hero);
			}
			this.missions[i].assignedHeroes.length = 0;
		}
	}
	runHero(hero: Hero): void {
		hero.experience+=1;
		if (hero.exhaustion<100){
				hero.exhaustion+=10;
		} else {
				hero.exhaustion=100;
		}
		for (var i = 0; i<this.team.length;i++){
				if(this.team[i].id==hero.id){
					this.team[i].exhaustion = hero.exhaustion;
					this.team[i].experience = hero.experience;
				}
		}
	}
	
	sortLists(): void {
		this.available.sort(function(a, b){
			var keyA = a.id,
			keyB = b.id;
			if(keyA < keyB) return -1;
			if(keyA > keyB) return 1;
			return 0;
		});
		this.selectedMission.assignedHeroes.sort(function(a, b){
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
