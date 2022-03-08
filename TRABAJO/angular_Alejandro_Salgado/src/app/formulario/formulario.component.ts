import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from './utils/validation';
import { UsuarioStorageService } from '../usuario-storage.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[UsuarioStorageService]
})
export class FormularioComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  errorGuardar = false;

  constructor(private formBuilder: FormBuilder, private usuarioStorageService: UsuarioStorageService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    // Llamo al servicio guardar usuario
    let confirmar = this.usuarioStorageService.guardaUsuario(this.form.value);

    if(confirmar){
      this.errorGuardar = false;
      alert(`Usuario ${this.form.value.username} guardado con éxito`);
      this.onReset();
    }
    else{
      this.errorGuardar = true;
      alert(`El correo ${this.form.value.email} ya existe`);
    }

    
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}

