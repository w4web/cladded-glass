import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { HomeService } from '../../home/home.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, PrimeNgModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent implements OnInit {

  footerInfo: any = {};

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getFooterInfo().subscribe((data: any) => {
      this.footerInfo = data;
    });
  }
  
}
