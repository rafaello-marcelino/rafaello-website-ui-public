import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})
export class GearComponent {
  modalSource : string = '';
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: { preventDefault: () => void; }) {
  event.preventDefault();
}
  img01: string = "./assets/website/Gear/gear.jpg";
  img02: string = "./assets/website/Gear/Cameras.jpg";
  img03: string = "./assets/website/Gear/Lenses.jpg";
  img04: string = "./assets/website/Gear/Flash.jpg";
  img05: string = "./assets/website/Gear/Tripod.jpg";

  // img01: string = "https://drive.google.com/uc?export=view&id=1TtCxoB2dKbyLgcR2PYv66zzl2oCcrP9W";
  // img02: string = "https://drive.google.com/uc?export=view&id=1BlB7baTgTZaql_NSFPvppzhb7ygQwMQd";
  // img03: string = "https://drive.google.com/uc?export=view&id=16ptE5PQkosIDHNS2wuqvCBKLHmx89QmT";
  // img04: string = "https://drive.google.com/uc?export=view&id=1ClfLR5wf3XuX8O5bw4QhlKX063OhGM2D";
  // img05: string = "https://drive.google.com/uc?export=view&id=1XjJJwvpnTndOwcOJZZbJ5RybYNLmhTn4";

  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.modalSource = srcAttr.nodeValue;
  }
}
