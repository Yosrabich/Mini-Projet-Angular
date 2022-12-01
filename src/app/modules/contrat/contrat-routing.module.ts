import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContratListComponent} from "./contrat-list/contrat-list.component";
import {ContratDetailComponent} from "./contrat-detail/contrat-detail.component";
import {ContratFormComponent} from "./contrat-form/contrat-form.component";

const routes: Routes = [
  // {
  //   path: '', component: ContratListComponent, children: [
  //     {path: 'details/:id', component: ContratDetailComponent}
  //   ]
  // }
  {path: '', component: ContratListComponent},
  {path: 'details/:id', component: ContratDetailComponent},
  {path: 'ajouter', component: ContratFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule {
}
