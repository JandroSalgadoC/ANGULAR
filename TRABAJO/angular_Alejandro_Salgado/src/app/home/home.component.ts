import { Component, OnInit } from '@angular/core';
import { UsuarioStorageService } from '../usuario-storage.service';

export interface Usuario {
  username: string;
  fullname: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {
  userloged: Usuario;
  constructor(private usuarioStorageService: UsuarioStorageService) { }

  ngOnInit(): void {
  }

  isLoged() {
    this.userloged = this.usuarioStorageService.getUsuarioLogueado();
    return this.userloged;
  }
}



