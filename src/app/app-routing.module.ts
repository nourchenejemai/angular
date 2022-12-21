import { ActeurGuard } from './acteur.guard';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActeursComponent } from './acteurs/acteurs.component';
import { AddActeursComponent } from './add-acteurs/add-acteurs.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { LoginComponent } from './login/login.component';
import { RechercheParFilmComponent } from './recherche-par-film/recherche-par-film.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateActeurComponent } from './update-acteur/update-acteur.component';


const routes: Routes = [
  {path:"acteurs", component : ActeursComponent},
  {path:"add-acteur", component : AddActeursComponent,canActivate:[ActeurGuard]},
  {path: "updateActeur/:id", component: UpdateActeurComponent}, 
  {path: "rechercheParFilm", component : RechercheParFilmComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeFilms", component : ListeFilmsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

  {path: "", redirectTo: "acteurs", pathMatch: "full" }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
