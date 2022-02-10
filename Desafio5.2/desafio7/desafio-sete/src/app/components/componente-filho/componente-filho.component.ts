import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentePaiComponent } from '../componente-pai/componente-pai.component';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.scss'],
})
export class ComponenteFilhoComponent extends ComponentePaiComponent {
  constructor(private router: Router) {
    super();
  }

  calculaCubo() {
    this.router.navigate(['/cubo'], {
      state: { valorRota: this.numeroComponent },
    });
  }
}
