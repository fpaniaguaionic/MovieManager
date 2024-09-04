import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonMenuButton, IonButton } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class BusquedaPage implements OnInit {
  public tituloBuscado: string = "";
  public peliculas: Movie[] = [];
  constructor() { }

  ngOnInit() {
  }

}
