import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './paginas/about/about.component';
import { NotMeComponent } from './paginas/not-me/not-me.component';
import { CvComponent } from './paginas/cv/cv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroComponent } from './paginas/cv/components/intro/intro.component';
import { SkillsComponent } from './paginas/cv/components/skills/skills.component';
import { ExperienceListComponent } from './paginas/cv/components/experience-list/experience-list.component';
import { ExperienceItemComponent } from './paginas/cv/components/experience-list/experience-item/experience-item.component';
import { TagComponent } from './paginas/cv/components/experience-list/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NotMeComponent,
    CvComponent,
    IntroComponent,
    SkillsComponent,
    ExperienceListComponent,
    ExperienceItemComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
