import { Component, OnInit } from '@angular/core';
import Dinosaurios from '../../assets/data/dinosaurs.json';

@Component({
  selector: 'app-dino-table',
  templateUrl: './dino-table.component.html',
  styleUrls: ['./dino-table.component.css']
})
export class DinoTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
