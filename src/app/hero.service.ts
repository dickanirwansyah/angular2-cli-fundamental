import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
    //menampilkan data yang aktive (true)
    getHeroes():Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    //menampilkan data dalam waktu 2 detik
    getHeroesSlowly():Promise<Hero[]>{
        return new Promise(resolve => {
            setTimeout(()=>resolve(this.getHeroes()),
             2000);
        });
    }
}