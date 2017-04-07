import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {InMemoryWebApiModule  } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  providers: [HeroService],
  imports: [BrowserModule,
    FormsModule, HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(
      [
        {
          path: 'heroes',
          component: HeroesComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        },
        {
          path: 'detail/:id',
          component: HeroDetailComponent
        }
      ]
    )
  ],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
