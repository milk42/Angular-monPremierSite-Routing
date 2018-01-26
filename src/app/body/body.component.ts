import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

// ma variable ( ou expression) que reconnait mon ngSwitch dans le html
// selectedMenu = 'home'; On peut le retirer une fois le service injeté

  constructor(public appService: AppService) { }


  ngOnInit() {
  }

  // gestion du switch pour faire apparaitre ou non le texte
  // On va faire interagir le header (menu liste) avec le body (texte en rapport au menu)
  // avec le SERVICE en important cette méthode créée de base pour le header.
  selectMenu(menu) {
    this.appService.selectedMenu = menu;
  }
}
