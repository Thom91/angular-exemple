import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-character',
  templateUrl: './item-character.component.html',
  styleUrls: ['./item-character.component.css']
})
export class ItemCharacterComponent implements OnInit {


  @Input() character : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
