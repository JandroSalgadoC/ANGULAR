import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { AcercadeComponent } from './acercade/acercade.component';

const routes: Routes = [

  {
    path:'',  component: HomeComponent, pathMatch:"full"
  }, 
  {
    path:'registro',  component: RegistroComponent, pathMatch:"full"
  }, 
  {
    path:'acercade',  component: AcercadeComponent, pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
