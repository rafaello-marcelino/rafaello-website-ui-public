import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotoComponent } from './photo/photo.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { GearComponent } from './gear/gear.component';
import { SamplesComponent } from './samples/samples.component';
import { AstroComponent } from './astro/astro.component';
import { LandComponent } from './land/land.component';
import { BirdsComponent } from './birds/birds.component';
import { StreetComponent } from './street/street.component';
import { RandomsComponent } from './randoms/randoms.component';
import { PhotohomeComponent } from './photohome/photohome.component';

const routes: Routes = [
  {path: `home`, component: HomeComponent},
  {path: `projects`, component: ProjectsComponent},
  {path: `photo`, component: PhotoComponent, children : [
    {path: `photohome`, component: PhotohomeComponent},
    {path: `astro`, component: AstroComponent},
    {path: `land`, component: LandComponent },
    {path: `birds`, component: BirdsComponent},
    {path: `street`, component: StreetComponent},
    {path: `randoms`, component: RandomsComponent},
    {path: `**`, component: PhotohomeComponent, pathMatch:'full'}
  ]},
  {path: `**`, component: HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
