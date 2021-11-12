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
      itemEncontrado.quantidade = quantidade;
    }
  }
}
