import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { HomeService } from '../home.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-packages',
  imports: [CommonModule, PrimeNgModule, CarouselModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})

export class PackagesComponent implements OnInit {

  packages: any[] = [];
  customOptions!: OwlOptions;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private homeService: HomeService) {}

  ngOnInit() {
    const margin = isPlatformBrowser(this.platformId) && window.innerWidth < 767 ? 15 : 30;
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      margin: margin,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 2
        },
        940: {
          items: 2
        }
      },
      nav: true
    };

    this.homeService.getPackages().subscribe(data => {
      this.packages = data;
    });
  }
  
}
