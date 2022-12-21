import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActeursComponent } from './acteurs/acteurs.component';
import { AddActeursComponent } from './add-acteurs/add-acteurs.component';
import { FormsModule } from '@angular/forms';
import { UpdateActeurComponent } from './update-acteur/update-acteur.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParFilmComponent } from './recherche-par-film/recherche-par-film.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    ActeursComponent,
    AddActeursComponent,
    UpdateActeurComponent,
    RechercheParFilmComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeFilmsComponent,
    UpdateFilmComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
