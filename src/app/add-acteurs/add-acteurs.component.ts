import { Component, OnInit } from '@angular/core';
import { Acteur } from '../model/acteur.model';
import {ActeurService } from '../services/acteur.service';
import { Film } from '../model/film.model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-acteurs',
  templateUrl: './add-acteurs.component.html',
})
export class AddActeursComponent implements OnInit{
  newActeur = new Acteur();
films!:Film[];
newIdf! :number;
newfilm! :Film;
//message:string;
constructor(private acteurService: ActeurService,
  private router: Router){}
  
ngOnInit(): void {
 
  this.acteurService.listeFilms().
subscribe(fils => {console.log(fils);
this.films = fils._embedded.films;
}
);
  
}

addActeur(){
 
  this.newActeur.film = this.films.find(cat => cat.idF == this.newIdf)!;
  this.acteurService.ajouterActeur(this.newActeur)
  .subscribe(prod => {
  console.log(prod);
  this.router.navigate(['acteurs']);
  });
  

}
//this.message = "Acteur"+this.newActeur.nomActeur+"ajouté avec succés !";

}

