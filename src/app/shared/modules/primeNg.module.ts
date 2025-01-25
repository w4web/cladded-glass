import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { TextareaModule } from 'primeng/textarea';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    SelectModule,
    RadioButtonModule,
    InputTextModule,
    AccordionModule,
    TextareaModule
  ],
})

export class PrimeNgModule {}