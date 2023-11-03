import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DownloadService } from '../service/download.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../service/email.service';
import { Email } from '../email';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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
  isEmailValid:boolean = true;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  constructor(private titleService: Title, 
    private downloadService: DownloadService,
    private emailService: EmailService,
    private formBuilder: FormBuilder) {
    this.titleService.setTitle('Rafaello - Home')
  }

  validateEmail(){
    // suppose value is"https://www.google.com";
    var patt = new RegExp(this.emailPattern);
    this.isEmailValid = patt.test(this.email);
}

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

  result: string = '';
  emailForm : Email = {
    name: '',
    email: '',
    message: ''
  };

  async sendEmail() {
    this.isLoading = true;
    // will restore when back end is fixed/deployed
    // const emailResponse = {
    //   next: (response: any) => {
    //     if(response == 'Sent') {
    //         this.name = '';
    //         this.email = '';
    //         this.message = '';
    //         this.sendStatus = 'Email has been sent'
    //         this.errorSend = false;
    //         this.isLoading = false;
    //     }
    //   },
    //   error: (error: any) => {
    //     this.isLoading = false;
    //     this.errorSend = true;
    //     this.sendStatus = 'Error occurred please try again later'

    //   }
    // };
    // this.emailForm.name = this.name;
    // this.emailForm.email = this.email;
    // this.emailForm.message = this.message; 
    // this.emailService.sendEmail(this.emailForm).subscribe(emailResponse); 
   

    //temporary fix for email service
    emailjs.init('kIcKakeI3XcF677zX');
     
    let response = await emailjs.send("service_8x6vwqa","template_tydg15w",{
    from_name: this.name,
    message: this.message,
    reply_to: this.email,
    }).then((result: EmailJSResponseStatus) => {
            this.name = '';
            this.email = '';
            this.message = '';
            this.sendStatus = 'Email has been sent'
            this.errorSend = false;
            this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
        this.errorSend = true;
        this.sendStatus = 'Error occurred please try again later'
    });


    

  }

}
