import { Component,ViewChild } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo7';

  ngClassBoolean: boolean = true;

  change(){
    this.ngClassBoolean = true;
  }


}
