/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';

import { AngularFirestoreModule,
         AngularFirestore,
         AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Peca } from './../model/peca.model';


@Injectable({
  providedIn: 'root'
})
export class PecasService {

  constructor(private firestore: AngularFirestore) { }


  public add(peca: Peca) {
   delete peca.id;
   peca.imagem = './../../assets/img/car-parts/battery.jpg';
   return this.firestore.collection('pecas').add({...peca});
  }

  public getAll() {
   return this.firestore.collection('pecas').snapshotChanges();
  }

  public get(id: string) {
    return this.firestore.collection('pecas').doc(id).ref.get().then((documento)=>{
      if (documento.exists) {
        const codigo = documento.id;
        const dados = documento.data();

        return {
          id: codigo,
          nome: dados['nome'],
          descricao: dados['descricao'],
          imagem: dados['imagem'],
          status: dados['status'],
          preco: dados['preco']
        };
      }

      return {
        id: '',
        nome: '',
        descricao: '',
        imagem: '',
        status: false,
        preco: 0
      };
    });
  }


  public update(peca: Peca) {
    return this.firestore.doc(`pecas/${peca.id}`).update(peca);
  }

  public delete(id: string) {
    return this.firestore.doc(`pecas/${id}`).delete();
  }
}
