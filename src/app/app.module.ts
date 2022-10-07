import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './components/experiencia-yeducacion/experiencia-yeducacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    SkillsComponent,
    ProyectosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
