import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path: "departement",
    loadChildren: () => import('./components/departement/departement.module').then(m =>m.DepartementModule)
  },

  {path:"home", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
