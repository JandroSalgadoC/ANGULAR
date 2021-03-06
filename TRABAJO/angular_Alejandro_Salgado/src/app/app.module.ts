import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FechaComponent } from './fecha/fecha.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { DinoTableComponent } from './dino-table/dino-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, RegistroComponent, FechaComponent, FormularioComponent, AcercadeComponent, DinoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
