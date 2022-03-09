import { Component, OnInit } from '@angular/core';
import DinosauriosJSON from '../../assets/data/dinosaurs.json';
interface Dinosaurio{
        name: String,
        era: String,
        diet:String,
        feetTall: Number,
        feetLong: Number,
        pounds: Number,
        image: String
}

@Component({
  selector: 'app-dino-table',
  templateUrl: './dino-table.component.html',
  styleUrls: ['./dino-table.component.css']
})
export class DinoTableComponent implements OnInit {

  Dinosuarios: Dinosaurio[] = DinosauriosJSON;
  imageRoute: string = "assets/images/"

  constructor() { }

  ngOnInit(): void {
  }

}
