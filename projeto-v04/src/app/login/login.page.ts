/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthLoginService } from './../auth/auth-login.service';
import { UsuariosService } from './../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public senha: string;

  constructor(private usuarioService: UsuariosService,
              private auth: AuthLoginService,
              private route: Router) { }

  ngOnInit() {
  }

  acessarConta() {
    this.auth.logar(this.email, this.senha).then((resposta)=>{
      console.log(resposta);
      const uid = resposta.user.uid;

      if (uid) {
        this.auth.setAutenticado(true);

        this.usuarioService.getByUID(uid).subscribe((usuarios: any[])=>{
          const [usuario] = usuarios;

          // console.log('Usuário logado', usuario);

          const idUser = usuario.payload.doc.id;

          const usuarioLogado = {
            id: idUser,
            nome: usuario.payload.doc.data()['nome'],
            email: usuario.payload.doc.data()['email'],
            senha: usuario.payload.doc.data()['senha'],
            uid: usuario.payload.doc.data()['uid']
          };

          console.log('Usuário logado', usuarioLogado);

          this.route.navigate(['/home']);
        });

      }

    });
  }
}
