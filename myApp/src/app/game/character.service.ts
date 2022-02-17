import { Injectable } from '@angular/core';
import { Character } from './character/character.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  characters: Character[] = [{
    id: 1,
    name: 'Krunal',
    enrollmentnumber: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 2,
    name: 'Rushabh',
    enrollmentnumber: 110470116023,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 3,
    name: 'Ankit',
    enrollmentnumber: 110470116022,
    college: 'VVP Engineering College',
    university: 'GTU'
}];

  constructor() { }

  public getCharacters(): any {
    const CharactersObservable = new Observable(observer => {
        setTimeout(() => {
            observer.next(this.characters);
        }, 100);
    });

    return CharactersObservable;
}

}
