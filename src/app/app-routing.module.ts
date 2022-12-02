import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepartementDetailsComponent} from './components/departement-details/departement-details.component';
import {FormDepartementComponent} from './components/form-departement/form-departement.component';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AdminUnivComponent} from "./components/admin-univ/admin-univ.component";
import {AjouterUniversiteComponent} from "./components/ajouter-universite/ajouter-universite.component";
import {AfficherUniversiteComponent} from "./components/afficher-universite/afficher-universite.component";
import {StatistiqueComponent} from "./components/statistique/statistique.component";

const routes: Routes = [{path: "", component: FormDepartementComponent},
  {path: "departement-details/:id", component: DepartementDetailsComponent},
  {path: "admin", component : AdminDashboardComponent ,

    children: [

      {
        path: 'adminuniv', // child route path
        component: AdminUnivComponent, // child route component that the router renders
      },
      {
        path: 'ajouteruniv', // child route path
        component: AjouterUniversiteComponent, // child route component that the router renders
      },
      {
        path: 'afficheruniv', // child route path
        component: AfficherUniversiteComponent, // child route component that the router renders
      },
      {
        path: 'statistique', // child route path
        component: StatistiqueComponent, // child route component that the router renders
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
