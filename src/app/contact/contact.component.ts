import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EmailService } from '../service/email.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(
    private titleService: Title, 
    private emailService: EmailService,
    private formBuilder: FormBuilder) {
    this.titleService.setTitle('Rafaello - Contact');
  }
  
  result: string = '';
  emailForm : Email = {
    name: '',
    email: '',
    message: ''
  };

  public sendEmail() {
    this.emailService.sendEmail(this.emailForm).subscribe(
      response => {

      }
    ); 
  }
}
