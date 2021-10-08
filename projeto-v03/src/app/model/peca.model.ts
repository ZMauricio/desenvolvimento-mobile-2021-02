export class Peca {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  status: boolean;
  preco: number;

  constructor()
  constructor(id?: string,
              nome?: string,
              descricao?: string,
              imagem?: string,
              status?: boolean,
              preco?: number) {
    this.id = (id)? id : '';
    this.nome = (nome)? nome : nome;
    this.descricao = (descricao)? descricao : '';
    this.imagem = (imagem)? imagem : '';
    this.status = (status)? status : false;
    this.preco = (preco)? preco : 0;
  }
}
