import { FormularioService } from './formulario.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Formulario } from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required, Validators.minLength(10 )])
  });

  constructor(private http: HttpClient,
    private service: FormularioService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.enviar(this.formulario.value);
    this.service.enviar(this.formulario.value).subscribe({
      next:(response:Formulario) => {
        console.log(response);
        this.formulario.reset();
      },
      error:(error:any) => {
        console.error(error)
      }
    });

  }
}
