import { Component } from '@angular/core';
import { PrimeNgModule } from '../shared/modules/primeNg.module';
import { BannerComponent } from './banner/banner.component';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { InstallationQuestionsComponent } from './installation-questions/installation-questions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FaqComponent } from './faq/faq.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { BlogsComponent } from './blogs/blogs.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    PrimeNgModule, 
    BannerComponent,
    PackagesComponent,
    ServicesComponent,
    InstallationQuestionsComponent,
    AboutUsComponent,
    ContactInfoComponent,
    FaqComponent,
    SubscribeFormComponent,
    BlogsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
