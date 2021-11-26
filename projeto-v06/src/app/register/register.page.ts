import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Usuario } from './../model/usuario.model';

import { AuthLoginService } from './../auth/auth-login.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public usuarioForm!: FormGroup;

  public promocoes: any[] = [
    {
      id: 1,
      nome: 'Peças',
      value: 'peca',
      checked: false
    },
    {
      id: 2,
      nome: 'Óleos',
      value: 'oleos',
      checked: false
    },
    {
      id: 3,
      nome: 'Pintura',
      value: 'pintura',
      checked: false
    }
  ];

  constructor(private formBuilder: FormBuilder,
              private auth: AuthLoginService,
              private usuarioService: UsuariosService,
              private route: Router) { }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(150)
                  ])
            ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      genero: ['', Validators.required],
      idade: ['0', Validators.compose([Validators.required, Validators.min(0)])],
      cidade: ['', Validators.required],
      promocoes: this.formBuilder.array([], Validators.required)
    });

    this.onLoadCheckBoxStatus();
  }

  public onLoadCheckBoxStatus() {
    const promocoes: FormArray = this.usuarioForm.get('promocoes') as FormArray;

    this.promocoes.forEach((item)=>{
      this.updateCheckControl(promocoes, item);
    });
  }

  public onSelectionChange(event, indice) {
    const promocoes: FormArray = this.usuarioForm.get('promocoes') as FormArray;

    this.promocoes[indice].checked = event.target.checked;

    this.updateCheckControl(promocoes, event.target);
  }

  public updateCheckControl(promocoes, checkboxItem) {

    if (checkboxItem.checked) {
      promocoes.push( new FormControl(checkboxItem.value) );
    } else {
        promocoes.controls.forEach((item: FormControl, index)=>{
          if (item instanceof FormControl) {
            if (item.value === checkboxItem.value) {
              promocoes.removeAt(index);
              return;
            }
          }
        });
    }
  }


  public registrar() {
    // console.log(this.usuarioForm);
    console.log(this.usuarioForm.value);

    let usuario: Usuario = null;

    if (this.usuarioForm.valid) {

      usuario = {
        id: '',
        nome: this.usuarioForm.value.nome,
        email: this.usuarioForm.value.email,
        senha: this.usuarioForm.value.senha,
        uid: ''
      };


      this.auth.criarConta( usuario.email, usuario.senha).then((resposta) => {
        console.log(resposta);

        if (resposta.user.uid) {
          usuario.uid = resposta.user.uid;

          this.usuarioService.add(usuario).then((resultado) => {
            this.route.navigate(['/login']);
          });
        }
      });

    }

  }

}
