import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { BASE_URL } from 'src/app/app-config';
import { FullMovie } from 'src/app/interfaces/full-movie';
import { environment } from 'src/environments/environment';

const API_KEY = environment.OMDB_API_KEY;
//https://www.omdbapi.com?apikey=fe486a03&s=Batman
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private http = inject(HttpClient);
  constructor() {
    //Para probar el servicio
    /*
    this.getMovie('tt0109830').subscribe(data => {
      console.log("*******************");
      console.log(data);
    })
    */
  }

  getMovie(imdbID: string): Observable<FullMovie> {
    return this.http
      .get<FullMovie>(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`)
      .pipe(
        delay(1000) //Simulación de retardo
      );
  }

  getMovies(title: string): Observable<any> {
    return this.http
      .get<any>(`${BASE_URL}?apikey=${API_KEY}&s=${title}`)
      .pipe(
        delay(1000) //Simulación de retardo
      );
  }


}
