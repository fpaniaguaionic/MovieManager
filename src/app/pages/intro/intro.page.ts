import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonButtons, IonImg } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonImg, IonMenuButton, IonButtons, IonLabel, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
