import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from './../model/usuario.model';

import { AuthLoginService } from './../auth/auth-login.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public usuario: Usuario = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    uid: ''
  };

  public usuarioForm!: FormGroup;

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
      cidade: ['', Validators.required]
    });
  }

  public registrar() {
    console.log(this.usuarioForm);

  /**
   this.auth
     .criarConta(this.usuario.email, this.usuario.senha)
     .then((resposta) => {
       console.log(resposta);

       if (resposta.user.uid) {
         this.usuario.uid = resposta.user.uid;

         this.usuarioService.add(this.usuario).then((resultado) => {
           this.route.navigate(['/login']);
         });
       }
     });
  */
  }
}
