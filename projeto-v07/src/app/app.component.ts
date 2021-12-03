/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { AuthLoginService } from './auth/auth-login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Produtos', url: '/pecas', icon: 'hammer' },
    { title: 'Conta', url: '/dados-conta', icon: 'person-circle' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Sair', url: '/login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes'];

  public nome: string = '';
  public email: string = '';

  constructor(private auth: AuthLoginService) {
    this.auth.emitLogin.subscribe((resposta)=>{
      if (resposta) {
        Storage.get({ key: 'usuario' }).then((data)=>{
          const usuarioStorage = JSON.parse(data.value);

          console.log('usuarioStorage', usuarioStorage);

          this.nome = usuarioStorage.nome;
          this.email = usuarioStorage.email;
        });
      }
    });
  }
}
