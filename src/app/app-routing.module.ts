import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';
import { TodoService } from './todo.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { XpComponent } from './xp/xp.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentTodoSwitchComponent } from './component-todo-switch/component-todo-switch.component';
import { LegalComponent } from './legal/legal.component';
import { CreditComponent } from './credit/credit.component';
import { RouterModule, Routes } from '@angular/router'; // c'est routes qui gère nos slach /bidule

const routes: Routes = [
  {path: '', component: HomeComponent}, // chemin : Pour '' (rien) tu m'envoie sur la page home
  {path: 'skills', component: SkillsComponent},
  {path: 'experience', component: XpComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'todo', component: ComponentTodoSwitchComponent},
  {path: 'legal', component: LegalComponent},
  {path: 'credit', component: CreditComponent},

];

@NgModule({
  exports: [RouterModule], // pas compris non plus pour l'instant mais il faut le mettre

  imports: [  //  les composants dont on se sert pour faire les url doivent être notés ici, dans le app-routing.module.ts
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,                        // Prend la méthode static forRoot avec comme argument = 
    RouterModule.forRoot(routes, {enableTracing: true}) // un route(notre variable routes définie en haut) : et enableTracing (pas compris)
  ]
  // declarations: [
  //   AppComponent,
  //   BodyComponent,
  //   HeaderComponent,
  //   FooterComponent,
  //   AddComponent,
  //   ListeComponent,
  //   HomeComponent,
  //   SkillsComponent,
  //   XpComponent,
  //   ContactComponent,
  //   ComponentTodoSwitchComponent,
  //   LegalComponent,
  //   CreditComponent
  // ]
})
export class AppRoutingModule { }
