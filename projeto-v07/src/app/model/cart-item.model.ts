import { Peca } from './peca.model';

export class CartItem {

  constructor(public item: Peca, public quantidade: number = 1) { }

  valor(): number {
    return this.item.preco * this.quantidade;
  }
}
