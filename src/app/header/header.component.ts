import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

listeFruit = ['Fraise', 'Pomme', 'Banana', 'Kiwi'];

  constructor(public appService: AppService) { }

  // selectedMenu = 'home'; on peut le retirer une fois le service injecté

  ngOnInit() {
  }

// selectMenu en fonction, pour changer dynamiquement 
// (avec le click) la couleur de la liste du menu
  selectMenu (menu) {
    this.appService.selectedMenu = menu;
    console.log(this.appService.selectedMenu);
  }
  changeColor(fruit): string {
    if (fruit === this.appService.selectedMenu){
      return 'red';
    } else {
      return 'black';
    }
  }
}
