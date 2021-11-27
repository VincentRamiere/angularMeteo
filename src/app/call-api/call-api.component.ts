import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {

  constructor() { }

  data : any[] = []

  getData(ville : any){

    this.data = []
    fetch('https://www.prevision-meteo.ch/services/json/' + ville)
      .then(response => response.json())
      .then(
        dataMeteo =>
        this.data.push(dataMeteo))
  }

  addItem(ville : any){

    this.getData(ville)

  }

  ngOnInit(): void {

    this.getData('Bordeaux')
    console.log(this.data)
  }

}
