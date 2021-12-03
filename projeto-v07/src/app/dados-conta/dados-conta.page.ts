import { Component, OnInit } from '@angular/core';

import { Storage } from '@capacitor/storage';

import { UsuariosService } from '../services/usuarios.service';

import { Usuario } from './../model/usuario.model';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.page.html',
  styleUrls: ['./dados-conta.page.scss'],
})
export class DadosContaPage implements OnInit {
  public usuario = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    uid: '',
    url: ''
  };

  constructor(private usuarioServ: UsuariosService) { }

  ngOnInit() {
    Storage.get({ key: 'usuario' }).then((data)=>{
      const usuarioStorage = JSON.parse(data.value);

      this.usuarioServ.get(usuarioStorage.id).then((usuario)=>{
        this.usuario = usuario;
      });
    });
  }

}
