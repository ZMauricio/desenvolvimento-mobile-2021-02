import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Peca } from './../model/peca.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public pecasList: Array<Peca> = [
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

  public peca = null;


  constructor(private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    const id = Number( this.rotaAtiva.snapshot.paramMap.get('id') );

    this.peca = this.getPeca(id);
  }

  public getPeca(id: number) {
    for(const obj of this.pecasList) {
      if (obj.id === id) {
        return obj;
      }
    }
  }

}
