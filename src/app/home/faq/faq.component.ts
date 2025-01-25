import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {

  faqs: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getFaqs().subscribe(data => {
      this.faqs = data;
    });
  }
  
}