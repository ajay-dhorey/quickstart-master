import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  providers: [HeroService],
  imports: [BrowserModule,
    FormsModule,
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
        }
      ]
    )
  ],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
