import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarComponent } from './calendar/calendar.component';
import { FormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/primeng";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, CalendarModule],
  declarations: [AppComponent, CalendarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
