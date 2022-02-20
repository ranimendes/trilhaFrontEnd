import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  responsivity = true
  toggle = false


  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.target.innerWidth); //mostrar no console o tamanho atual da pagina
    if (event.target.innerWidth <= 900) {
      this.responsivity = false
    } else {
      this.responsivity = true
    }
  }

}
