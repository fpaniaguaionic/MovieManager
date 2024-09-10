import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonMenuButton, IonButton, IonProgressBar, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonAlert, IonToast } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { Movie } from 'src/app/interfaces/movie';
import { PeliculasService } from 'src/app/services/httpomdb/httpomdb.service';
import { MoviesManagerService } from 'src/app/services/movies-manager/movies-manager.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonToast, IonAlert, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonImg, IonProgressBar, IonButton, IonLabel, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class BusquedaPage implements OnInit {
  public tituloBuscado: string = "";
  public peliculas: Movie[] = [];
  public cargando: boolean = false;
  public noEncontrado: boolean = false;//Para el diálogo que avisa de que no se ha encontrado ninguna película
  public guardado: boolean = false;//Para el toast
  public mensaje: string = "";//Para el toast
  public alertButtons = ['Cerrar'];
  constructor(private peliculasService: PeliculasService,
    private moviesManager: MoviesManagerService
  ) { }

  ngOnInit() {
  }
  guardar(pelicula: Movie) {
    try {
      this.moviesManager.addPelicula(pelicula);
      //this.peliculas.splice(this.peliculas.indexOf(pelicula), 1);//Borra de la lista sólo si añade en el servicio
      this.mensaje = "Película guardada";
      this.guardado = true;
    } catch {
      this.mensaje = "La película ya está en el repositorio";
      this.guardado = true;
    }
    this.peliculas.splice(this.peliculas.indexOf(pelicula), 1);//Borra de la lista SIEMPRE
  }
  buscar() {
    this.cargando = true;
    this.peliculasService.getMovies(this.tituloBuscado).subscribe(data => {
      this.cargando = false;
      if (data.Response === 'False') {//Response es específico de OMDB-API
        this.noEncontrado = true;
      } else {
        this.peliculas = data.Search;
      }
    })
  }
  cerrarAlerta() {
    this.noEncontrado = false;
    this.tituloBuscado = "";
  }

  cerrarToast() {
    this.guardado = false;
  }

}
