import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxAdibroDatetimePickerModule, NgxAdibroDatetimePickerDirective } from 'ngx-adibro-datetime-picker';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAdibroDatetimePickerModule
  ],
  providers: [NgxAdibroDatetimePickerDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
