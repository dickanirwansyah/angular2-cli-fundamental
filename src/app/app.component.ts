import { Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  template : `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" 
      [class.selected]="hero == selectedHero"
      (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>

    <hero-detail [hero]="selectedHero"></hero-detail>
    
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details !</h2>
      <div><label>id :</label>{{selectedHero.id}}</div>
      <div>
        <label>name :</label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  providers : [HeroService]
})

export class AppComponent implements OnInit{
  title = 'Tour Of Heroes with Angular 2';
  //ng-for
  heroes : Hero[];

  selectedHero: Hero;

  constructor(private heroService : HeroService){}

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero : Hero):void {
    this.selectedHero =hero;
  }


}


const HEROES : Hero[] = [
  {
    id : 11,
    name : 'Mr. Nice'
  },
  {
    id : 12,
    name : 'Narco'
  },
  {
    id : 13,
    name : 'Bombasto'
  },
  {
    id : 14,
    name : 'Celeritas'
  },
  {
    id : 15,
    name : 'Magneta'
  },
  {
    id : 16,
    name : 'RubberMan'
  },
  {
    id : 17,
    name : 'Dynama'
  },
  {
    id : 18,
    name : 'Dr IQ'
  },
  {
    id : 19,
    name : 'Magma'
  },
  {
    id : 20,
    name : 'Tornado'
  }
];

export class Hero {
  id : number;
  name : string;
}


