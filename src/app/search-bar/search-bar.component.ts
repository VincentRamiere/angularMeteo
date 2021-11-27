import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

@Output() ville = new EventEmitter<any>();

constructor() { }

getItem(value : any){

  this.ville.emit(value)

}

  ngOnInit(): void {
  }

} 
