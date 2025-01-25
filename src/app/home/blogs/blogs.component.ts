import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { HomeService } from '../home.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule, PrimeNgModule, CarouselModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})

export class BlogsComponent implements OnInit {

  blogs: any[] = [];
  customOptions!: OwlOptions;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private homeService: HomeService) {}

  ngOnInit() {
    const margin = isPlatformBrowser(this.platformId) && window.innerWidth < 767 ? 15 : 20;
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      margin: margin, // Add margin between slides
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        }
      },
      nav: true
    };

    this.homeService.getBlogs().subscribe(data => {
      this.blogs = data;
    });
  }
  
}
