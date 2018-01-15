import { Component, OnInit } from '@angular/core';

import { Mission } from '../mission';
import { MISSIONS } from '../mission-list';
import { DifficultyPipe } from '../difficulty.pipe';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
	
	missions = MISSIONS;
	selectedMission: Mission;
	
	onSelect(mission: Mission): void {
		this.selectedMission = mission;
	}
	
  constructor() { }

  ngOnInit() {
  }

}
