import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meteo-suivant',
  templateUrl: './meteo-suivant.component.html',
  styleUrls: ['./meteo-suivant.component.css']
})
export class MeteoSuivantComponent implements OnInit {


@Input() meteoSuivant : any | undefined

  constructor() { }

  ngOnInit(): void {

    console.log(this.meteoSuivant)
  }

}
