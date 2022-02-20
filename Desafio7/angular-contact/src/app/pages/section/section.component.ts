import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  resp = innerWidth;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize',['$event'])
  onResize() {
    this.resp = window.innerWidth;
  }

}
