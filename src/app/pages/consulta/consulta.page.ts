import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonProgressBar, IonInput, IonButton, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonList, IonIcon, IonAlert, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { MoviesManagerService } from 'src/app/services/movies-manager/movies-manager.service';
import { Movie } from 'src/app/interfaces/movie';
import { heartOutline, heartSharp } from 'ionicons/icons';
import { ActivatedRoute, Router } from '@angular/router';

const iconList = {
  heartOutline, heartSharp,
};

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
  standalone: true,
  imports: [IonBadge, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonImg, IonAlert, IonIcon, IonList, IonItemOption, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonButton, IonInput, IonProgressBar, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ConsultaPage implements OnInit {

  moviesManagerService = inject(MoviesManagerService);
  tituloBuscado: string = "";
  peliculasFiltradas: Movie[];
  borrando: boolean = false;
  peliculaParaBorrar: Movie | undefined;
  verFavoritos: boolean = false;

  private activatedRoute = inject(ActivatedRoute);//PARAMETROS DEL ROUTING

  constructor(private router: Router) {
    addIcons({ heartSharp, heartOutline });
    this.peliculasFiltradas = this.moviesManagerService.getPeliculas();
  }

  ngOnInit() {
    this.verFavoritos = "true" == (this.activatedRoute.snapshot.paramMap.get('fav') as string);//PARAMETROS DEL ROUTING
    if (this.verFavoritos) {
      this.peliculasFiltradas = this.peliculasFiltradas.filter(p => p.fav == true);
    }
  }

  public verDetalle(imdbID: string) {
    this.router.navigateByUrl(`/detalle/${imdbID}`)
  }

  public setFav(peliculaFavorita: Movie) {
    peliculaFavorita.fav = !peliculaFavorita.fav;
    this.moviesManagerService.guardarPeliculas();
  }

  public ocultarDialogo() {
    this.borrando = false;
  }

  eliminar(pelicula: Movie) {
    this.borrando = true;
    this.peliculaParaBorrar = pelicula;
  }

  public alertButtons = [
    {
      text: 'Cancelar', role: 'cancel',
      handler: () => {
        this.peliculaParaBorrar = undefined;
      },
    },
    {
      text: 'Borrar', role: 'confirm',
      handler: () => {
        this.moviesManagerService.deletePelicula(this.peliculaParaBorrar);
        this.buscar();
      },
    },
  ];



  buscar() {
    this.peliculasFiltradas =
      this.moviesManagerService.getPeliculas().filter(
        p =>
          p.Title.toUpperCase().includes(this.tituloBuscado.toLocaleUpperCase())
          &&
          (!this.verFavoritos || p.fav == this.verFavoritos));
  }
}
