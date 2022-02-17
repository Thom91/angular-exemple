import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { ListCharacterComponent } from './list-character/list-character.component';
import { ItemCharacterComponent } from './item-character/item-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharacterComponent,
    ListCharacterComponent,
    ItemCharacterComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GameModule { }
