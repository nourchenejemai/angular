import { Component, OnInit } from '@angular/core';

//import { ActivatedRoute,Router } from '@angular/router';
import { ActeurService } from '../services/acteur.service';
import { Acteur } from '../model/acteur.model';
import{Film} from '../model/film.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-acteur',
  templateUrl: './update-acteur.component.html',
  styles: [
    
  ]

})
export class UpdateActeurComponent implements OnInit {
films!:Film[];
updatedFId! : number;

  currentActeur = new Acteur();
constructor(private activatedRoute:ActivatedRoute,
  private router :Router,
  private acteurService :ActeurService){

    }

ngOnInit(): void {
  this.acteurService.listeFilms().
subscribe(fils => {console.log(fils);
  this.films = fils._embedded.films;
});

 this.acteurService.consulterActeur(this.activatedRoute.snapshot.params['id']).
 subscribe( act =>{ this.currentActeur = act; 
this.updatedFId=this.currentActeur.film.idF;
});

}
updateActeur()
{
  this.currentActeur.film = this.films.
 find(act => act.idF == this.updatedFId)!;
  this.acteurService.updateActeur(this.currentActeur).subscribe(act => {
    this.router.navigate(['acteurs']); 
  });
    


}
}
