/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';

import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  public frete: number = 15;

  constructor(private carrinhoServ: CarrinhoService) { }

  ngOnInit() {
  }

  public itens(): any[] {
    return this.carrinhoServ.itens;
  }

  public total(): number {
    return this.carrinhoServ.total();
  }

  public aumentar(item) {
    this.carrinhoServ.aumentar(item);
  }

  public diminuir(item) {
    this.carrinhoServ.diminuir(item);
  }

  public remover(item) {
    this.carrinhoServ.removeItem(item);
  }
}
