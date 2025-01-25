import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { CommonModule } from '@angular/common';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-banner',
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})

export class BannerComponent {

  quoteForm!: FormGroup;
  cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  
  vatOptions: any[] = [
    { name: 'Yes, I have confirmed my address is excluded', value: 'Yes' },
    { name: 'No', value: 'No' },
    { name: 'I am not sure', value: 'Not-Sure' },
    { name: 'Unavailable in Your Area', value: 'Unavailable' }
  ];

  constructor(private fb: FormBuilder, private homeService: HomeService) {
    this.createForm();
  }

  createForm() {
    this.quoteForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      vatExcluded: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.quoteForm.valid) {
      // console.log(this.quoteForm.value);
      this.homeService.getQuote(this.quoteForm.value).subscribe({
        next: (res: any) => {
          console.log("Response: ", res);
        },
        error: (err: any) => {
          console.log("Error: ", err);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
  
}
