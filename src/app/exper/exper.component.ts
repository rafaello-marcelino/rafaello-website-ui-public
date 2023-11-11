import { Component } from '@angular/core';

@Component({
  selector: 'app-exper',
  templateUrl: './exper.component.html',
  styleUrls: ['./exper.component.css']
})
export class ExperComponent {
  public  downloadResume(): void {
    // will restore when back end is fixed/deployed
    //   this.downloadService.downloadResume().subscribe(
    //     response => {
    //       const file = response;
    //       const url = window.URL.createObjectURL(new Blob([response as BlobPart], { type: 'application/pdf' }));
    //       var link = document.createElement('a');
    //       document.body.appendChild(link);
    //       link.setAttribute('style', 'display: none');
    //       link.href = url;
    //       link.download = 'Rafaello Marcelino - Software Developer.pdf';
    //       link.click();
    //   });
        let link = document.createElement("a");
        link.download = "Rafaello Marcelino - Software Developer.pdf";
        link.href = "./assets/Rafaello Marcelino - Software Developer.pdf";
        link.click();
   
    }
}
