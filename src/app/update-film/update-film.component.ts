import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html'
})
export class UpdateFilmComponent implements OnInit {
  @Input()
  film!:Film ;
  
  @Output() 
   filmUpdated = new EventEmitter<Film>();

   @Input()
   ajout!:boolean;
   
  constructor(){}
  ngOnInit(): void {
console.log("ngOnInit du composant UpdateFilm",this.film)  
}

saveFilm(){
  this.filmUpdated.emit(this.film);

}
  

}
