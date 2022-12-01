import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepartementDetailsComponent} from './components/departement-details/departement-details.component';
import {FormDepartementComponent} from './components/form-departement/form-departement.component';

const routes: Routes = [{path: "", component: FormDepartementComponent},
  {path: "departement-details/:id", component: DepartementDetailsComponent},
  {path: 'contrats', loadChildren: () => import('./modules/contrat/contrat.module').then(m => m.ContratModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
