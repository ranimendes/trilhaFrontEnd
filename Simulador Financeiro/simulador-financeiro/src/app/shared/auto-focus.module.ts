import { AutoFocusDirective } from './directives/auto-focus.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [AutoFocusDirective],
  imports: [CommonModule],
  exports: [AutoFocusDirective]
})
export class AutoFocusModule {}
