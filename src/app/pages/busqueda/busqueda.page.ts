import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonMenuButton, IonButton, IonProgressBar, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { Movie } from 'src/app/interfaces/movie';
import { PeliculasService } from 'src/app/services/httpomdb/httpomdb.service';
import { MoviesManagerService } from 'src/app/services/movies-manager/movies-manager.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonImg, IonProgressBar, IonButton, IonLabel, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class BusquedaPage implements OnInit {
  public tituloBuscado: string = "";
  public peliculas: Movie[] = [];
  public cargando: boolean = false;
  constructor(private peliculasService: PeliculasService,
    private moviesManager: MoviesManagerService
  ) { }

  ngOnInit() {
  }
  guardar(pelicula: Movie) {
    this.moviesManager.addPelicula(pelicula);
  }
  buscar() {
    this.cargando = true;
    console.log("Buscando..." + this.tituloBuscado);
    this.peliculasService.getMovie(this.tituloBuscado).subscribe(data => {
      this.cargando = false;
      if (data.Response === 'False') {//Response es específico de OMDB-API
        console.error("No he encontrado ninguna película");
      } else {
        console.log(data);
        this.peliculas = data.Search;
      }
    })
  }


}
