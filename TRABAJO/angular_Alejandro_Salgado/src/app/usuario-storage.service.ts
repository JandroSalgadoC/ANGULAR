import { Injectable } from '@angular/core';

export interface UsuarioLogeado{
  username:string;
  fullname:string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioStorageService {

  usuarioLogueado: UsuarioLogeado;

  constructor() {
    let admin = {
      fullname: 'administrador',
      username: 'admin',
      email: 'admin@admin.com',
      password: 'administrador'
      }
      sessionStorage.setItem('usuarios', JSON.stringify([admin]));
   }

  guardaUsuario(usuario) {
    let usuariosArray: Array<any> = JSON.parse(sessionStorage.getItem('usuarios'));
    let existeUsuario = usuariosArray.find(usuarioAux => usuarioAux.email === usuario.email);
    if (existeUsuario) {
      return false;
    }
    else {
      //Si llegamos hasta aquí todo está validado y no me interesa guardar esa información
      delete usuario.confirmPassword;
      delete usuario.acceptTerms;
      usuariosArray.push(usuario);
      sessionStorage.setItem('usuarios', JSON.stringify(usuariosArray));
      return true;
    }
  }

  compruebaUsuario(usuarioTest:string, passwordTest:string){
    let usuariosArray: Array<any> = JSON.parse(sessionStorage.getItem('usuarios'));
    let existeUsuario = usuariosArray.find(usuarioAux => usuarioAux.email === usuarioTest);

    if(!existeUsuario || existeUsuario.password !== passwordTest){
      alert("Usuario/Contraseña inválidos");
      return undefined;
    }
    this.usuarioLogueado = existeUsuario;
    return existeUsuario;
  }

  getUsuarioLogueado(){ return this.usuarioLogueado}

  logoutUsuario(){ this.usuarioLogueado = undefined;}
}
