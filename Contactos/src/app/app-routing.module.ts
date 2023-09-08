import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NewContactComponent } from './components/pages/new-contact/new-contact.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'new',component: NewContactComponent},
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
