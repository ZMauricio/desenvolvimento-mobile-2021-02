import { Injectable } from '@angular/core';

import { CartItem } from '../model/cart-item.model';
import { Peca } from '../model/peca.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  public itens: CartItem[] = [];

  constructor() { }

  public clear() {
    this.itens = [];
  }

  public addItem(item: Peca, quantidade: number = 1) {
    // eslint-disable-next-line arrow-body-style
    const itemEncontrado = this.itens.find((value)=>{
      return value.item.id === item.id;
    });

    if (itemEncontrado) {
      if (quantidade>1) {
        itemEncontrado.quantidade = quantidade;
      } else {
        itemEncontrado.quantidade++;
      }

      console.log(this.itens);
    } else {
      this.itens.push( new CartItem(item, quantidade));
    }
  }

  public removeItem(item: CartItem) {
    const posicao = this.itens.indexOf(item);
    this.itens.splice(posicao, 1);
  }

  public aumentar(item: CartItem) {
    // eslint-disable-next-line arrow-body-style
    const itemEncontrado = this.itens.find((value)=>{
      return value.item.id === item.item.id;
    });

    if (itemEncontrado) {
      itemEncontrado.quantidade++;
    }
  }

  public diminuir(item: CartItem) {
    // eslint-disable-next-line arrow-body-style
    const itemEncontrado = this.itens.find((value)=>{
      return value.item.id === item.item.id;
    });

    if (itemEncontrado) {
      itemEncontrado.quantidade--;
      if (itemEncontrado.quantidade === 0) {
        this.removeItem(itemEncontrado);
      }
    }
  }

  public total(): number {
    // eslint-disable-next-line arrow-body-style
    return this.itens.map((item)=>{
      return item.valor();
    // eslint-disable-next-line arrow-body-style
    }).reduce((total, valor)=>{
      return total + valor;
    }, 0);
  }
}
