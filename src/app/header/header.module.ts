import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
