import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './../pages/pages-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar.component';
import { AutoFocusModule } from '../shared/auto-focus.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [CommonModule, PagesRoutingModule, MatToolbarModule, AutoFocusModule ],
  exports: [
    NavbarComponent
  ],
})
export class CoreModule {}
