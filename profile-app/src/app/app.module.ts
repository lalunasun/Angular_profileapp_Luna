import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillComponent } from './Skill/Skill.component';
import { WorkComponent } from './Work/Work.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [						
    AppComponent,
      NavbarComponent,
      BannerComponent,
      FooterComponent,
      AboutmeComponent,
      SkillComponent,
      WorkComponent,
      EducationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
