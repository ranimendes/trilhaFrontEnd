import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SectionComponent } from './pages/section/section.component'
import { FormComponent } from './pages/form/form.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './pages/main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FormComponent,
    FooterComponent,
    MainComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
