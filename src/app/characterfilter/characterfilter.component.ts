import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-characterfilter',
  standalone: false,
  templateUrl: './characterfilter.component.html',
  styleUrl: './characterfilter.component.css'
})
export class CharacterfilterComponent {
  gryffindorCharacters: any
  ravenclawCharacters:any
  hufflepuffCharacters:any
  slytherinCharacters:any

  constructor(http: HttpClient){
    let responseG = http.get('https://hp-api.onrender.com/api/characters/house/gryffindor')
    responseG.subscribe((data)=> this.gryffindorCharacters=data);

    let responseR = http.get('https://hp-api.onrender.com/api/characters/house/ravenclaw')
    responseR.subscribe((data)=> this.ravenclawCharacters=data);

    let responseH = http.get('https://hp-api.onrender.com/api/characters/house/hufflepuff')
    responseH.subscribe((data)=> this.hufflepuffCharacters=data);

    let responseS = http.get('https://hp-api.onrender.com/api/characters/house/slytherin')
    responseS.subscribe((data)=> this.slytherinCharacters=data);

    

  }

  

}
