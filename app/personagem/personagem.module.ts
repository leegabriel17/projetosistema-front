import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { CpersonagemComponent } from './cadastroPersonagem/cpersonagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpersonagemComponent } from './gerenciaPersonagem/gpersonagem.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [
    GpersonagemComponent,
    CpersonagemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CurrencyMaskModule,
    RouterModule,
    InputTextModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    CardModule,
    CalendarModule,
  ],
  exports: [
    GpersonagemComponent,
    CpersonagemComponent
  ]
})
export class PersonagemModule { }


