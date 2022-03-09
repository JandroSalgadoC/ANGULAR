import { Component, OnInit } from '@angular/core';
import { UsuarioStorageService } from '../usuario-storage.service';
export interface Usuario{
  username:string;
  fullname:string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {
  
  mail: string;
  password: string;
  userloged: Usuario;

  constructor(private usuarioStorageService: UsuarioStorageService) {}

  ngOnInit(): void {
  }

  login(): void {
    this.userloged =this.usuarioStorageService.compruebaUsuario(this.mail, this.password);
  }

  isLoged() {
    this.userloged = this.usuarioStorageService.getUsuarioLogueado();
    return this.userloged;
  }

  logout():void {
    this.mail = '';
    this.password = '';
    this.userloged = undefined;
    this.usuarioStorageService.logoutUsuario();
  }

}
