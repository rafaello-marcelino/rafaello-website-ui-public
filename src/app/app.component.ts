import { Component, OnInit } from '@angular/core';
import { Email } from './email';
import { EmailService } from './service/email.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DownloadService } from './service/download.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

  title = 'Rafaello Portfolio Website';
  constructor(private emailService: EmailService, private downloadService: DownloadService) {}

  ngOnInit(): void {
    initFlowbite();
  }

  public  testConnection(): void {
    this.emailService.testConnection().subscribe(
      (response: any) => {

      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
    );
  }

}
