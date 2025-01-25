import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-services',
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent implements OnInit {

  services: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getServices().subscribe(data => {
      this.services = data;
    });
  }
  
}
