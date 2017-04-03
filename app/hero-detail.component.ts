import { Component,Input } from '@angular/core';
import { Form } from '@angular/forms';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: `./heroDetailComponentTemplate.html`,
  styleUrls:['./hero-detail.component.css']
})
export class HeroDetailComponent  { 
    @Input() hero: Hero;
}
