import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HqComponent } from './hq/hq.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    HqComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
