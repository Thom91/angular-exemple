import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character/character.model';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css']
})

export class ListCharacterComponent implements OnInit {


  characters : Character[] = [];
  allCharacters : Character[] = [];
  name = '';
  emptyList = false;
  search() { 
   
    console.log("input : " + this.name);

      this.characters = [];
      this.allCharacters.forEach(element => {
        if(element.name.includes(this.name)){
          this.characters.push(element);
        }
      });
      this.emptyList = (this.characters.length==0)
      console.log("emptyList : " + this.emptyList);

  }
  isEmpty(){
    return (this.characters.length == 0)
  }
  constructor(private characterService : CharacterService) { }

  ngOnInit() {

    const characterObservable = this.characterService.getCharacters();
    characterObservable.subscribe((charactersData : Character[]) =>{

      this.emptyList = (charactersData.length==0);
      console.log("emptyList : " + this.emptyList);
      this.characters = charactersData;
      this.allCharacters = charactersData;
    });
  }

}
