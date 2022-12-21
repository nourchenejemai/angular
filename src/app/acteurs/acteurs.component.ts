import { Component, OnInit } from '@angular/core';
import { Acteur } from '../model/acteur.model';
import {ActeurService } from '../services/acteur.service';
import { Film } from '../model/film.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html' 
})
export class ActeursComponent implements OnInit{
acteurs? : Acteur[] ;
films!:Film[];
newIdf!:number;
newFilm! :Film;
constructor(private acteurService  :ActeurService,
  private router :Router,
  public authService: AuthService){
// this.acteurs=acteurService.listeActeurs();
}
ngOnInit(): void {
 /* this.films= this.acteurService.listeFilms();
  this.acteurService.listeActeurs().subscribe(prods => {
    console.log(prods);
    this.acteurs = prods;
    });*/
this.chargerActeurs();
}

/*addProduit() {
  this.newFilm = 
  this.acteurService.consulterFilm(this.newIdf);
  this.newActeur.film = this.newFilm;
  this.acteurService.ajouterActeur(this.newActeur);
  this.router.navigate(['acteurs']);
}*/




chargerActeurs(){
  this.acteurService.listeActeurs().subscribe(acts => {
    console.log(acts);
    this.acteurs = acts;
    }); 
    }
    
    supprimerActeur(a: Acteur)
    {
 let conf = confirm("Etes-vous sûr ?");
if (conf)
this.acteurService.supprimerActeur(a.idActeur).subscribe(() => {
  console.log("acteur supprimé");
  this.chargerActeurs();
});
    
    } 
    
}

