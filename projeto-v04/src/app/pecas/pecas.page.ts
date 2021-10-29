/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable arrow-body-style */
import { Component, OnInit } from '@angular/core';

import { PecasService } from '../services/pecas.service';

import { Peca } from './../model/peca.model';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.page.html',
  styleUrls: ['./pecas.page.scss']
})
export class PecasPage implements OnInit {

  public pecasList: Array<Peca> = [];

  constructor(private pecasService: PecasService) { }

  ngOnInit() {
   this.pecasService.getAll().subscribe( (pecas)=> {

    this.pecasList = pecas.map((obj)=> {
      const idDocumento = obj.payload.doc.id;
      const dados = obj.payload.doc.data();

      return {
        id: idDocumento,
        nome: dados['nome'],
        descricao: dados['descricao'],
        imagem: dados['imagem'],
        status: dados['status'],
        preco: dados['preco']
      };
    });

   });

  }

}
