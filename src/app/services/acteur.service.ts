import { Injectable } from '@angular/core';
import { Acteur } from '../model/acteur.model';
import { Film } from '../model/film.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilmWrapper } from '../model/filmWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class ActeurService {
 
    apiURL: string = 'http://localhost:8080/acteurs/api';
    apiURLFil: string = 'http://localhost:8080/acteurs/fil';

  acteurs!: Acteur[];
  acteur!: Acteur;
  films!: Film[];
  /*film: number;*/
  constructor(private http : HttpClient) {
 /*  this.films = [
       {idf :1, descriptionf:"xxi",nomf:"xxi"},
       {idf :2, descriptionf:"yyi",nomf:"yyi"}
     ] ;
   this.acteurs = [
   {idActeur : 1, nomActeur : "Pitt ", prActeur : "Brad", ageActeur : 50,film:{idf :1, descriptionf:"xx",nomf:"xx"}},
   {idActeur : 2, nomActeur : "freeman ", prActeur : "Morgan", ageActeur : 85,film:      {idf :2, descriptionf:"yy",nomf:"yy"}},
   {idActeur : 3, nomActeur : "DiCaprio ", prActeur : "Leonardo", ageActeur : 60,film :      {idf :1, descriptionf:"xx",nomf:"xx"}},
 
 ];*/
  }

  listeActeurs(): Observable<Acteur[]> {
    return this.http.get<Acteur[]>(this.apiURL);
  }




  ajouterActeur(act: Acteur): Observable<Acteur> {
    return this.http.post<Acteur>(this.apiURL, act, httpOptions);
  }
  //addActeur(acteur : Acteur){
  //this.acteurs.push(acteur);
  //}
  supprimerActeur(id:number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterActeur(id: number): Observable<Acteur> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Acteur>(url);
  }
  updateActeur(act: Acteur): Observable<Acteur> {
    return this.http.put<Acteur>(this.apiURL, act, httpOptions);
  }

  trierActeurs() {
    this.acteurs = this.acteurs.sort((n1, n2) => {
      if (n1.idActeur > n2.idActeur) {
        return 1;
      }
      if (n1.idActeur < n2.idActeur) {
        return -1;
      }
      return 0;
    });
  }

  listeFilms():Observable<FilmWrapper> {
    return this.http.get<FilmWrapper>(this.apiURLFil);
  }
    
  consulterFilm(id:number):Film{
    return this.films.find(fil => fil.idF == id)!;
  }

  rechercherParFilm(idF: number):Observable< Acteur[]> {
    const url = `${this.apiURL}/actsf/${idF}`;
    return this.http.get<Acteur[]>(url);
}
rechercherParNom(nom: string):Observable< Acteur[]> {
  const url = `${this.apiURL}/actsByName/${nom}`;
  return this.http.get<Acteur[]>(url);
  }
  ajouterFilm( fil: Film):Observable<Film>{
    return this.http.post<Film>(this.apiURLFil, fil, httpOptions);
    }


}
