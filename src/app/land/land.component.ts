import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent {
  modalSource : string = '';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Playgound - Landscapes')
  }

  img01: string = "./assets/website/Landscapes/IMG_1870.jpg";
  img02: string = "./assets/website/Landscapes/IMG_1212.jpg";
  img03: string = "./assets/website/Landscapes/IMG_1371-Edit.jpg";
  img04: string = "./assets/website/Landscapes/IMG_3307-Enhanced-NR.jpg";
  img05: string = "./assets/website/Landscapes/IMG_3232-Enhanced-NR.jpg";
  img06: string = "./assets/website/Landscapes/20230602111809_IMG_0787.jpg";
  img07: string = "./assets/website/Landscapes/IMG_0257.jpg";
  img08: string = "./assets/website/Landscapes/IMG_4548-Enhanced-NR.jpg";
  img09: string = "./assets/website/Landscapes/IMG_1102.jpg";
  img10: string = "./assets/website/Landscapes/IMG_1107.jpg";
  img11: string = "./assets/website/Landscapes/IMG_3246-Enhanced-NR.jpg";
  img12: string = "./assets/website/Landscapes/IMG_1324.jpg";
  img13: string = "./assets/website/Landscapes/IMG_1330-Edit.jpg";
  img14: string = "./assets/website/Landscapes/IMG_1722-Edit.jpg";
  img15: string = "./assets/website/Landscapes/IMG_3342-Enhanced-NR.jpg";
  img16: string = "./assets/website/Landscapes/IMG_0193.jpg";
  img17: string = "./assets/website/Landscapes/IMG_9243.jpg";
  img18: string = "./assets/website/Landscapes/IMG_9244.jpg";
  img19: string = "./assets/website/Landscapes/IMG_9643.jpg";
  
  // img01: string = "https://drive.google.com/uc?export=view&id=1ao5steSdncG8Gnoct9SHBM16iGFppXS4";
  // img02: string = "https://drive.google.com/uc?export=view&id=1cg0Zj8zxzxd0set_WSjE2oXmyeMYQH2B";
  // img03: string = "https://drive.google.com/uc?export=view&id=1X7HVIFr5HD7oZAGhB9YAac4KIvwkLvOv";
  // img04: string = "https://drive.google.com/uc?export=view&id=1ZwuSLU0J4eIfZAkmcogOveSCwjGS_6rt";
  // img05: string = "https://drive.google.com/uc?export=view&id=1pnrNnFOq4igY1WFe55-il0T-biTMW9o7";
  // img06: string = "https://drive.google.com/uc?export=view&id=1dflo2IwlsPvDHYqia8qPeEuCt0zu9d8J";
  // img07: string = "https://drive.google.com/uc?export=view&id=1tUO5_NjDHlEm9S1M8UggKzLNvnXEImog";
  // img08: string = "https://drive.google.com/uc?export=view&id=1wpKElh4IVemOWA8rtOWcjiApldY6bhhJ";
  // img09: string = "https://drive.google.com/uc?export=view&id=18WA47dOtvhux3JkPcibgzH_T3_bwhn2q";
  // img10: string = "https://drive.google.com/uc?export=view&id=1xiTcQTBkya1-X4zDVAMi03LgPmRzf_on";
  // img11: string = "https://drive.google.com/uc?export=view&id=13T6tLHlAyy14ChmoCcyrCxMBYI_D1RPI";
  // img12: string = "https://drive.google.com/uc?export=view&id=1Sra3F4wfENpS3ymxQST47-6_yZjMMCQB";
  // img13: string = "https://drive.google.com/uc?export=view&id=1-VArGCpwXkm14GyOmxCAdGZ2pdiGZPEL";
  // img14: string = "https://drive.google.com/uc?export=view&id=142TVzMxzCaVuxot27DmHjrmPdfFaq6TX";
  // img15: string = "https://drive.google.com/uc?export=view&id=1FVXBDN8rG8QRALjclFWbP7ZFF7CecWmw";
  // img16: string = "https://drive.google.com/uc?export=view&id=19EnpQXsubNF-98oOetrEzCLj1gbZXOT5";
  // img17: string = "https://drive.google.com/uc?export=view&id=1RJ64u7rAtZoINRI_JuyqEQAZoSMycIfH";
  // img18: string = "https://drive.google.com/uc?export=view&id=1mEnQqgYv6SQGB2eBN_Lj7jCVaul4JHZ3";
  // img19: string = "https://drive.google.com/uc?export=view&id=1dzCQjYOxL9kIJRvyjIORcs5mlW7E8-l0";


  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }
}
