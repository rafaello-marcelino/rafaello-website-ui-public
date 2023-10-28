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
  constructor(private titleService: Title, 
    private downloadService: DownloadService,
    private emailService: EmailService,
    private formBuilder: FormBuilder) {
    this.titleService.setTitle('Rafaello - Home')
  }
  
  public  downloadResume(): void {
    this.downloadService.downloadResume().subscribe(
      response => {
        const file = response;
        const url = window.URL.createObjectURL(new Blob([response as BlobPart], { type: 'application/pdf' }));
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.setAttribute('style', 'display: none');
        link.href = url;
        link.download = 'Rafaello Marcelino - Software Developer.pdf';
        link.click();
    });
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
            this.isLoading = false;
        }
      },
      error: (error: any) => {
        this.isLoading = false;
        this.sendStatus = 'Error occurred please try again later'

      }
    };

    this.emailService.sendEmail(this.emailForm).subscribe(emailResponse); 

  }

}
