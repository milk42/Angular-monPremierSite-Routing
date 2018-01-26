import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Liste } from '../liste';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 texteListe = '';  // je passe du string à l'objet

 // texteListe: Liste;

  constructor(public todoService: TodoService) { }



  ngOnInit() {
  }
}
