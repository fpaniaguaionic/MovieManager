import { Injectable } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  private peliculas: Movie[] = [];
  constructor() {
    this.rellenarArray();
  }

  public getPeliculas(): Movie[] {
    return this.peliculas;
  }
  public addPelicula(pelicula: Movie) {
    this.peliculas.push(pelicula);
  }

  rellenarArray() {
    let p1: Movie = {
      Title: "Batman",
      Year: 2023,
      Type: "Acción",
      Poster: "poster1",
      imdbID: "1000",
      fav: true
    }
    let p2: Movie = {
      Title: "Superman",
      Year: 2023,
      Type: "Acción",
      Poster: "poster1",
      imdbID: "1000",
      fav: true
    }
    this.peliculas.push(p1);
    this.peliculas.push(p2);
  }
}
