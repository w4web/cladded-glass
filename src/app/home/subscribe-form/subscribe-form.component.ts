import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-subscribe-form',
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.scss'
})

export class SubscribeFormComponent implements OnInit {

  subscribeForm!: FormGroup;

  constructor(private fb: FormBuilder, private homeService: HomeService) {
    this.createForm();
  }

  ngOnInit() {
    
  }

  createForm() {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      // console.log(this.subscribeForm.value);
      this.homeService.subscribe(this.subscribeForm.value).subscribe({
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
