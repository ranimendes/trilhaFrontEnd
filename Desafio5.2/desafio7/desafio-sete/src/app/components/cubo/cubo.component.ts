import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss'],
})
export class CuboComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.numeroCubo =
      this.router.getCurrentNavigation()?.extras.state?.['valorRota'];
  }

  ngOnInit(): void {}

  numeroCubo: number = 0;
}
