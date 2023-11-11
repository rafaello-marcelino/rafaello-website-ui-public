import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DownloadService } from '../service/download.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../service/email.service';
import { Email } from '../email';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private titleService: Title, ) {
    this.titleService.setTitle('Rafaello - Home')
  }

 

}
