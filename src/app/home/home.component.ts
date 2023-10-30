import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DownloadService } from '../service/download.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { EmailService } from '../service/email.service';
import { Email } from '../email';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string='';
  email: string='';
  message: string='';
  sendStatus: string = 'Message will be sent directly to my professional email';
  isLoading : boolean = false;
  errorSend : boolean = false;
  constructor(private titleService: Title, 
    private downloadService: DownloadService,
    private emailService: EmailService,
    private formBuilder: FormBuilder) {
    this.titleService.setTitle('Rafaello - Home')
  }

  slides: string [] = ['./assets/image Slide/01.jpg', './assets/image Slide/02.jpg', './assets/image Slide/03.jpg', './assets/image Slide/04.jpg', './assets/image Slide/05.jpg']
    i=0;

    getSlide() {
        return this.slides[this.i];
    }

    getPrev() {
      this.i = this.i===0 ? this.slides.length-1 : this.i - 1;
    }
  //edit here    
    getNext() {
        this.i = this.i===this.slides.length-1 ? 0 : this.i + 1;
    }
  
  public  downloadResume(): void {
      let link = document.createElement("a");
      link.download = "Rafaello Marcelino - Software Developer.pdf";
      link.href = "./assets/Rafaello Marcelino - Software Developer.pdf";
      link.click();
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
  }



  result: string = '';
  emailForm : Email = {
    name: '',
    email: '',
    message: ''
  };

  public sendEmail() {
    this.isLoading = true;
    this.emailForm.name = this.name;
    this.emailForm.email = this.email;
    this.emailForm.message = this.message; 
    const emailResponse = {
      next: (response: any) => {
        if(response == 'Sent') {
            this.name = '';
            this.email = '';
            this.message = '';
            this.sendStatus = 'Email has been sent'
            this.errorSend = false;
            this.isLoading = false;
        }
      },
      error: (error: any) => {
        this.isLoading = false;
        this.errorSend = true;
        this.sendStatus = 'Error occurred please try again later'

      }
    };

    this.emailService.sendEmail(this.emailForm).subscribe(emailResponse); 

  }

}
