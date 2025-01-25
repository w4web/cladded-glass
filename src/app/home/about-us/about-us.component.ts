import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {

  aboutUsItems: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getAboutUsItems().subscribe(data => {
      this.aboutUsItems = data;
    });
  }
  
}
