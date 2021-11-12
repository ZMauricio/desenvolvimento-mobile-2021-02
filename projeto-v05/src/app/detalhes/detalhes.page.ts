import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PecasService } from '../services/pecas.service';

import { AlertController } from '@ionic/angular';

import { Peca } from './../model/peca.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public peca: Peca = new Peca();

  public avaliacao = 4;
  public numeroAvaliacoes = 50;
  public itensRestantes = 99;

  public quantidade = 0;
  public total = 0;

  constructor(private rotaAtiva: ActivatedRoute,
              private rota: Router,
              private pecasService: PecasService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    const id = this.rotaAtiva.snapshot.paramMap.get('id');

    this.pecasService.get(id).then((peca)=>{
      this.peca = peca;
    });
  }

  async exibirAlerta() {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      subHeader: 'Erro ao enviar os dados',
      message: 'Informe a quantidade de produtos para efetuar a compra.',
      buttons: ['OK']
    });

    await alert.present();

    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

  public deletar() {
    if (this.peca.id || this.peca.id === '') {
      this.pecasService.delete(this.peca.id).then((resposta)=>{
        console.log(resposta);
        this.rota.navigate(['/pecas']);
      });
    }
  }

  public aumentar() {
    this.quantidade++;
    this.total = this.peca.preco*this.quantidade;
  }

  public diminuir() {
    if (this.quantidade>0) {
      this.quantidade--;
      this.total = this.peca.preco*this.quantidade;
    }
  }

  public addCarrinho() {
    if (this.quantidade>0) {

      this.rota.navigate(['/carrinho']);

    } else {
      this.exibirAlerta();
    }
  }
}
