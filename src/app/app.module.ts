import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {FormDepartementComponent} from './components/form-departement/form-departement.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DepartementDetailsComponent} from './components/departement-details/departement-details.component';
import {HomeComponent} from './pages/home/home.component';
import {FormUniversiteComponent} from './components/form-universite/form-universite.component';
import {UniversiteDetailsComponent} from './components/universite-details/universite-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminUnivComponent } from './components/admin-univ/admin-univ.component';
import {AjouterUniversiteComponent} from "./components/ajouter-universite/ajouter-universite.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FormDepartementComponent,
    DepartementDetailsComponent,
    HomeComponent,
    FormUniversiteComponent,
    UniversiteDetailsComponent,
    AdminDashboardComponent,
    AdminUnivComponent,
    AjouterUniversiteComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
