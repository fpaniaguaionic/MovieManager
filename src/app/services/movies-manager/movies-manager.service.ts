import { Injectable } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

const NODO_RAIZ = "peliculas";

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  private peliculas: Movie[] = [];

  constructor(private storage: Storage) {
    this.init();
  }
  //INICIALIZACIÓN Y CARGA DE LOS DATOS ALMACENADOS EN LA BASE DE DATOS LOCAL
  async init() {
    this.storage = await this.storage.create().finally(() => {
      this.rellenarArray();
    });
  }

  //Carga las películas almacenadas en la base de datos en el array local
  rellenarArray() {
    this.storage.get(NODO_RAIZ).
      then((peliculasDB) => {
        //console.log(peliculasDB);
        if (peliculasDB != null) {
          peliculasDB.forEach((element: Movie) => {
            this.peliculas.push(element);
          });
        }
      })
  }
  //Método público para agregar una película al servicio
  public addPelicula(pelicula: Movie) {
    if (this.peliculas.find(p => p.imdbID === pelicula.imdbID) != undefined) {
      throw new Error("La película ya existe");
    } else {
      this.peliculas.push(pelicula);//Añadimos la película al array
      this.guardarPeliculas();//Añadimos la película a la base de datos local
    }
  }

  //Método privado para agregar la película a la base de datos local
  private guardarPeliculas() {
    this.storage.get(NODO_RAIZ).
      then(() => {
        this.storage.set(NODO_RAIZ, this.peliculas);
      }).
      catch((error) => {
        console.error("Error:" + error);
      }).
      finally(() => {
        console.log("Fin del proceso de almacenamiento");
      });
  }

  //Obtener todas las películas
  public getPeliculas(): Movie[] {
    return this.peliculas;
  }
}