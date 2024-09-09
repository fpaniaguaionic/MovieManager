import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonProgressBar, IonInput, IonButton, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonList, IonIcon, IonAlert, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { MoviesManagerService } from 'src/app/services/movies-manager/movies-manager.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonImg, IonAlert, IonIcon, IonList, IonItemOption, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonButton, IonInput, IonProgressBar, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ConsultaPage implements OnInit {

  s = inject(MoviesManagerService);
  tituloBuscado: string = "";
  peliculasFiltradas: Movie[];
  borrando: boolean = false;
  public ocultarDialogo() {
    this.borrando = false;
  }
  eliminar() {
    this.borrando = true;
  }

  public alertButtons = [
    {
      text: 'Cancelar', role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Borrar', role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  constructor() {
    this.peliculasFiltradas = this.s.getPeliculas();
  }

  ngOnInit() {
  }

  buscar() {
    this.peliculasFiltradas =
      this.s.getPeliculas().filter(
        p => p.Title.toUpperCase().includes(this.tituloBuscado.toLocaleUpperCase()));
  }


}
