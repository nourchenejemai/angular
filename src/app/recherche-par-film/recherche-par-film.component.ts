import { Component, OnInit } from '@angular/core';
import { Acteur } from '../model/acteur.model';
import { Film } from '../model/film.model';
import { ActeurService } from '../services/acteur.service';

@Component({
  selector: 'app-recherche-par-film',
  templateUrl: './recherche-par-film.component.html'
})
export class RechercheParFilmComponent implements OnInit {
  IdFilm!:number;
  films!:Film[];
  acteurs! : Acteur[];
constructor(private acteurService :ActeurService){}
  ngOnInit(): void {
    this.acteurService.listeFilms().
    subscribe(fils => {this.films = fils._embedded.films;
    console.log(fils);
    });
      }
  onChange(){
    
      this.acteurService.rechercherParFilm(this.IdFilm).
      subscribe(acts =>{this.acteurs=acts});
  }
  }
