import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  texteImpote;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  ImpoterTexte(texte) {
    this.texteImpote = texte;
  }
}
