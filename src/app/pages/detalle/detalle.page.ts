import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/httpomdb/httpomdb.service';
import { FullMovie } from 'src/app/interfaces/full-movie';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [IonImg, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonMenuButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallePage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private imdbID: string = "";
  public peliculaCompleta: FullMovie | undefined;
  constructor(private servicioOMDB: PeliculasService) { }

  ngOnInit() {
    this.imdbID = (this.activatedRoute.snapshot.paramMap.get('imdbID') as string);
    this.servicioOMDB.getMovie(this.imdbID).subscribe(pelicula => {
      this.peliculaCompleta = pelicula;
    })
  }
}
