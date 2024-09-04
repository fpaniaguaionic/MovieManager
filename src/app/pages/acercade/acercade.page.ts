import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
  standalone: true,
  imports: [IonTitle, IonButtons, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class AcercadePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
