import { AfterContentInit, Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[autoFocus]'
})

export class AutoFocusDirective implements AfterContentInit {


  constructor (private host: ElementRef) {}


  ngAfterContentInit() {
    this.host.nativeElement.focus()
  }

}
