import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CurrentComponent } from './current/current.component';
import { ExperComponent } from './exper/exper.component';
import { PhotoComponent } from './photo/photo.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { GearComponent } from './gear/gear.component';
import { PhotonavComponent } from './photonav/photonav.component';
import { SamplesComponent } from './samples/samples.component';
import { AstroComponent } from './astro/astro.component';
import { LandComponent } from './land/land.component';
import { BirdsComponent } from './birds/birds.component';
import { StreetComponent } from './street/street.component';
import { RandomsComponent } from './randoms/randoms.component';
import { PhotohomeComponent } from './photohome/photohome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectCardComponent,
    FooterComponent,
    AboutComponent,
    CurrentComponent,
    ExperComponent,
    PhotoComponent,
    AboutmeComponent,
    GearComponent,
    PhotonavComponent,
    SamplesComponent,
    AstroComponent,
    LandComponent,
    BirdsComponent,
    StreetComponent,
    RandomsComponent,
    PhotohomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
