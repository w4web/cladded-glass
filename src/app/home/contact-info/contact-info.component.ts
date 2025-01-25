import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-contact-info',
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})

export class ContactInfoComponent implements OnInit {

  quoteForm!: FormGroup;
  contactInfoItems: any[] = [];

  constructor(private fb: FormBuilder, private homeService: HomeService) {
    this.createForm();
  }

  ngOnInit() {
    this.homeService.getContactInfoItems().subscribe(data => {
      this.contactInfoItems = data;
    });
  }

  createForm() {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
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
