import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HqComponent } from './hq/hq.component';
import { TeamComponent } from './team/team.component';
import { MissionComponent } from './mission/mission.component';

const routes: Routes = [
	{ path: 'hq', component: HqComponent },
	{ path: 'team', component: TeamComponent },
	{ path: 'mission', component: MissionComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { 
}

