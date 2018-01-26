import { Injectable } from '@angular/core';
import { Liste } from './liste';




@Injectable()
export class TodoService {

listeTodo = [];
/* 
listeTodo = [
  {
    id : '1',
    name : 'premier texte'
  },
  {
    id : '2',
    name : 'deuxième texte'
  }
];
*/
  constructor() { }

  ajouterListe(texteListe) {
    const objetListe = new Liste(this.listeTodo.length, texteListe);
    this.listeTodo.push(objetListe);

    // this.listeTodo.push(objetListe.);    // dans cette fonction j'ajoute avec push, ma valeur dans le tableau listeTodo.

  }
  supprimerTodo(suppList: Liste) {
    console.log(this.listeTodo.indexOf(suppList));
     this.listeTodo.splice(this.listeTodo.indexOf(suppList), 1);
     // Si j'utilise cette fonction,
     // je supprime par splite mon objet qui est ciblé par indexof
   }

    modifierTodo(modTodo: Liste) {
     modTodo.edit = true; // si j'utilise cette fonction, edit passe à true donc le input apparait
   }

  changeModif (liste, name) {
    liste.name = name;
  }

}
