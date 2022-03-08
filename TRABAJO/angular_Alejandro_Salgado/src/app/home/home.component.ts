import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 //atributo usuario logueado para el template blokear la entrada o lo ke sea. 
  constructor() { }

  ngOnInit(): void {
  }

}
