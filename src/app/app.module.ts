import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChampionsNewComponent } from './champions-new/champions-new.component';
import { ChampionsUpdateComponent } from './champions-update/champions-update.component';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { ChampionsComponent } from './champions/champions.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { ChampionsFormComponent } from './champions-form/champions-form.component';

const appRoutes: Routes = [
  {
    path: 'champions',
    component: ChampionsListComponent
  },
  {
    path: 'new',
    component: ChampionsNewComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'update/:id',
    component: ChampionsUpdateComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ChampionsNewComponent,
    ChampionsUpdateComponent,
    ChampionsListComponent,
    ChampionsComponent,
    HomeComponent,
    ChampionsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
