import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-details',
  standalone: false,
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  characterDetails:any
  characterId: any
  constructor(http:HttpClient){
    let response = http.get(`https://hp-api.onrender.com/api/character/${this.characterId}`)
    response.subscribe((data)=>this.characterDetails=data);
  }

}
