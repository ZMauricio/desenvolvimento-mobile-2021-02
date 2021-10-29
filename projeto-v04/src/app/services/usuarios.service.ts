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

  public getByUID(uidParam: string) {
    return this.firestore
    .collection('usuarios', ref=> ref.where('uid', '==', uidParam) )
    .snapshotChanges();
  }
}
