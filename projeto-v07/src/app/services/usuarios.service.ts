/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: AngularFirestore) { }

  public add(usuario: Usuario) {
    delete usuario.id;
    return this.firestore.collection('usuarios').add(usuario);
  }

  public get(id: string) {
    return this.firestore.collection('usuarios').doc(id).ref.get().then((documento)=>{
      if (documento.exists) {
        const codigo = documento.id;
        const dados = documento.data();

        return {
          id: codigo,
          nome: dados['nome'],
          email: dados['email'],
          senha: dados['senha'],
          uid: dados['uid'],
          url: dados['url']
        };
      }

      return {
        id: '',
        nome: '',
        email: '',
        senha: '',
        uid: '',
        url: ''
      };
    });
  }

  public getByUID(uidParam: string) {
    return this.firestore
    .collection('usuarios', ref=> ref.where('uid', '==', uidParam) )
    .snapshotChanges();
  }
}
