import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-meteo-jour',
  templateUrl: './meteo-jour.component.html',
  styleUrls: ['./meteo-jour.component.css']
})
export class MeteoJourComponent implements OnInit {

  @Input() meteoJour : any | undefined 

  constructor() { }

  ngOnInit(): void {
  }

}
