import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { ActeurService } from '../services/acteur.service';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html'
})
export class ListeFilmsComponent implements OnInit{
  ajout:boolean=true;
  films!:Film[];
 updatedfil:Film = {
   "idF": 0, "nomF": "",
   descriptionF: ''
 };
  constructor(private acteurService :ActeurService){

  }
  ngOnInit(): void {
   
  this.chargerFilms();
  }
  chargerFilms(){
    this.acteurService.listeFilms().
    subscribe(fils => {this.films = fils._embedded.films;
    console.log(fils);
    });
    }
    
  filmUpdated(fil:Film){
console.log("film recue du composant updateFilm",fil);
this.acteurService.ajouterFilm(fil).subscribe(()=> this.chargerFilms());
  }
  updateFil(fil:Film){
    this.updatedfil=fil;
    this.ajout=false;
  }

  
}
