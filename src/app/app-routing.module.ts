import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './paginas/about/about.component';
import { NotMeComponent } from './paginas/not-me/not-me.component';
import { CvComponent } from './paginas/cv/cv.component';


const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'not-me', component: NotMeComponent},
  {path: 'cv', component: CvComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
