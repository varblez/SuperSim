import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HqComponent } from './hq/hq.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeamComponent } from './team/team.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { MissionComponent } from './mission/mission.component';
import { DifficultyPipe } from './difficulty.pipe';
import { AddHeroComponent } from './add-hero/add-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    HqComponent,
    TeamComponent,
    HeroProfileComponent,
    MissionComponent,
    DifficultyPipe,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
