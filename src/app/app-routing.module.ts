import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './paginas/about/about.component';
import { NotMeComponent } from './paginas/not-me/not-me.component';


const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'not-me', component: NotMeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
