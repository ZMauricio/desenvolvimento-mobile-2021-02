import { Injectable } from '@angular/core';

import { Peca } from './../model/peca.model';


@Injectable({
  providedIn: 'root'
})
export class PecasService {

  private pecasList: Array<Peca> = [
    {
      id: 1,
      nome: 'amortecedor',
      imagem: './../../assets/img/car-parts/amortecedor-01.jpg',
      preco: 150,
      status: true,
      descricao: ''
    },
    {
      id: 2,
      nome: 'bateria',
      imagem: './../../assets/img/car-parts/battery.jpg',
      preco: 300,
      status: true,
      descricao: ''
    },
    {
      id: 3,
      nome: 'parafusos',
      imagem: './../../assets/img/car-parts/bolt.jpg',
      preco: 5,
      status: true,
      descricao: ''
    },
    {
      id: 4,
      nome: 'volante',
      imagem: './../../assets/img/car-parts/volante.png',
      preco: 200,
      status: true,
      descricao: ''
    }
  ];

  constructor() { }

  public getAll(): Array<Peca> {
    return this.pecasList;
  }

  public get(id: number): Peca {
    for (const obj of this.pecasList) {
      if (obj.id === id) {
        // eslint-disable-next-line curly
        return obj;
      }
    }

    return null;
  }

  public add(peca: Peca) {
    peca.id = this.pecasList.length;
    peca.imagem = './../../assets/img/car-parts/amortecedor-01.jpg';
    this.pecasList.push(peca);
  }

  public update(peca: Peca) {
    if (peca.id || peca.id === 0 ) {
      for(const obj of this.pecasList) {
        if (obj.id === peca.id) {
          obj.nome = peca.nome;
          obj.imagem = peca.imagem;
          obj.descricao = peca.descricao;
          obj.preco = peca.preco;
          obj.status = peca.status;
          break;
        }
      }
    }
  }

  public delete(id: number) {
    let posicao = null;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let i= 0; i<this.pecasList.length; i++) {
      if (this.pecasList[ i ].id === id) {
        posicao = i;
        break;
      }
    }

    if (posicao || posicao === 0) {
      this.pecasList.splice(posicao, 1);
    }
  }
}
