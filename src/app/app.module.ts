import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';
import { TodoService } from './todo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { XpComponent } from './xp/xp.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentTodoSwitchComponent } from './component-todo-switch/component-todo-switch.component';
import { LegalComponent } from './legal/legal.component';
import { CreditComponent } from './credit/credit.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [  // ajouter les composants
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    AddComponent,
    ListeComponent,
    HomeComponent,
    SkillsComponent,
    XpComponent,
    ContactComponent,
    ComponentTodoSwitchComponent,
    LegalComponent,
    CreditComponent
  ],
  imports: [                     // ajouter les modules
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [AppService, TodoService], // ajouter les services
  bootstrap: [AppComponent]
})
export class AppModule { }
