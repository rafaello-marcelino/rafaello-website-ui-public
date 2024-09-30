import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent {
  modalSource : String = '';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Playgound - Street')
  }
  img01: string = "./assets/website/Street/IMG_8497.jpg";
  img02: string = "./assets/website/Street/IMG_0930-Enhanced-NR.jpg";
  img03: string = "./assets/website/Street/IMG_0912.jpg";
  img04: string = "./assets/website/Street/IMG_0834.jpg";
  img05: string = "./assets/website/Street/IMG_0854.jpg";
  img06: string = "./assets/website/Street/IMG_8560.jpg";
  img07: string = "./assets/website/Street/IMG_0896-2.jpg";
  img08: string = "./assets/website/Street/IMG_1208.jpg";
  img09: string = "./assets/website/Street/IMG_0874.jpg";
  img10: string = "./assets/website/Street/IMG_1752-Enhanced-NR.jpg";
  img11: string = "./assets/website/Street/IMG_1730-Enhanced-NR.jpg";
  img12: string = "./assets/website/Street/IMG_4501-Enhanced-NR.jpg";
  // img01: string = "https://drive.google.com/uc?export=view&id=1Qhl6H-YX7fprb4oOxhl_iyvajkQiY02F";
  // img02: string = "https://drive.google.com/uc?export=view&id=1vqg-IYva4Y--wxBE_A_RaYPgmxlrpcAf";
  // img03: string = "https://drive.google.com/uc?export=view&id=1FNgEkdRLf8KxblY3nhn5OQ-hPUBgz34n";
  // img04: string = "https://drive.google.com/uc?export=view&id=1Hy-vgOZxmk8c1QpdU1Gyi6zRvzan3JKD";
  // img05: string = "https://drive.google.com/uc?export=view&id=1T9ufO8Y0Uze3xOx86anIDR30prsk1MMs";
  // img06: string = "https://drive.google.com/uc?export=view&id=1H5dPTIHWDYIuXtmDcW2Y82dTUtEqG54d";
  // img07: string = "https://drive.google.com/uc?export=view&id=1Mv8-n-SQwph2-MH8QfsQPJ2NQCuPQRVf";
  // img08: string = "https://drive.google.com/uc?export=view&id=1XCXscUaNZJzdbyS_oZWC9aLwjRoHfiBK";
  // img09: string = "https://drive.google.com/uc?export=view&id=1HfM4qIdwjRLdzly9q6v2RC5TOYW7_Sm9";
  // img10: string = "https://drive.google.com/uc?export=view&id=1oBMOimRYbVqK972USzwvrNJJRoOVshpP";
  // img11: string = "https://drive.google.com/uc?export=view&id=1Od3D90PUNNsATiQF3n3sFu15pqa4kquA";
  
  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }

}
