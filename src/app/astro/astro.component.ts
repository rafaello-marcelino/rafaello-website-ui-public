import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.css']
})

export class AstroComponent {
  modalSource : String = '';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Playgound - Astro')
  }
  img01: string = "./assets/website/Astro/IMG_1633-HDR-Enhanced.jpg";
  img02: string = "./assets/website/Astro/IMG_4079-HDR.jpg";
  img03: string = "./assets/website/Astro/IMG_4111.jpg";
  img04: string = "./assets/website/Astro/IMG_7643-HDR.jpg";
  img05: string = "./assets/website/Astro/IMG_1634.jpg";
  
  // img01: string = "https://drive.google.com/uc?export=view&id=1BcEBBVXdIrIV9ZJI7-P0NrxQYlI-MWCp";
  // img02: string = "https://drive.google.com/uc?export=view&id=1b9rvMTmjKIl66rhL1vM0e6NAhfQJShiG";
  // img03: string = "https://drive.google.com/uc?export=view&id=1b_g9W4BPiW57muYyJltxt0JEbe1RYEGR";
  // img04: string = "https://drive.google.com/uc?export=view&id=1lrUyOZOx7oT57JeO9CdndPeVXR324-GX";
  // img05: string = "https://drive.google.com/uc?export=view&id=1IoY4EYF9RMSjqkGfIesGI4P54tmP5hwD";

  

  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }

}
