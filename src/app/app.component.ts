import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeSharp, searchOutline, searchSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

const iconList = {
  eyeOutline, eyeSharp, searchOutline, searchSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule,
    IonApp, IonSplitPane, IonMenu, IonContent, IonList,
    IonListHeader, IonNote, IonMenuToggle, IonItem,
    IonIcon, IonLabel, IonRouterLink, IonRouterOutlet,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Películas', url: '/consulta/false', icon: 'eye' },
    { title: 'Buscar', url: '/busqueda', icon: 'search' },
    { title: 'Favoritos', url: '/favoritos/true', icon: 'heart' },
    { title: 'Acerca de...', url: '/acercade', icon: 'warning' },
  ];
  public labels = ['Terror (En desarrollo)', 'Action (En desarrollo)', 'Comedy (En desarrollo)',];
  constructor() {
    addIcons(iconList);
  }
}
