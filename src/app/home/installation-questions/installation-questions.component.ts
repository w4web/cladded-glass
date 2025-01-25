import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-installation-questions',
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './installation-questions.component.html',
  styleUrl: './installation-questions.component.scss'
})

export class InstallationQuestionsComponent implements OnInit {

  installationQuestions: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getInstallationQuestions().subscribe(data => {
      this.installationQuestions = data;
    });
  }
  
}
