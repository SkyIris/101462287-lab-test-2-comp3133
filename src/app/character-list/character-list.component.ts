import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-character-list',
  standalone: false,
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characterList: any
  constructor(http: HttpClient){
    let response = http.get('https://hp-api.onrender.com/api/characters')
    response.subscribe((data)=> this.characterList=data);

  }

}
