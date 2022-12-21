import { Component, OnInit } from '@angular/core';
import { Acteur } from '../model/acteur.model';
import { ActeurService } from '../services/acteur.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit{
  nomActeur!:string;
  allActeurs! : Acteur[];
searchTerm!: string;
acteurs!:Acteur[];

constructor(private acteurService:ActeurService){}
ngOnInit(): void {
  this.acteurService.listeActeurs().subscribe(acts => {
    console.log(acts);
    this.acteurs = acts;
    });
    
}
rechercherActs(){
this.acteurService.rechercherParNom(this.nomActeur).
subscribe(acts => {
this.acteurs = acts;
console.log(acts)});
}
onKeyUp(filterText : string){
  this.acteurs = this.allActeurs.filter(item =>
  item.nomActeur.toLowerCase().includes(filterText));
  }
}
