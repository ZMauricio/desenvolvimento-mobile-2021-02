import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.page.html',
  styleUrls: ['./pecas.page.scss'],
})
export class PecasPage implements OnInit {

  public pecasList: Array<any> = [
    {
      id: 1,
      nome: 'amortecedor',
      imagem: './../../assets/img/car-parts/amortecedor-01.jpg',
      preco: 150,
      status: true
    },
    {
      id: 2,
      nome: 'bateria',
      imagem: './../../assets/img/car-parts/battery.jpg',
      preco: 300,
      status: true
    },
    {
      id: 3,
      nome: 'parafusos',
      imagem: './../../assets/img/car-parts/bolt.jpg',
      preco: 5,
      status: true
    },
    {
      id: 4,
      nome: 'volante',
      imagem: './../../assets/img/car-parts/volante.png',
      preco: 200,
      status: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
