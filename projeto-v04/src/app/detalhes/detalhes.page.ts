import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PecasService } from '../services/pecas.service';

import { Peca } from './../model/peca.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public peca: Peca = new Peca();

  constructor(private rotaAtiva: ActivatedRoute,
              private rota: Router,
              private pecasService: PecasService) { }

  ngOnInit() {
    const id = this.rotaAtiva.snapshot.paramMap.get('id');

    this.pecasService.get(id).then((peca)=>{
      this.peca = peca;
    });
  }

  public deletar() {
    if (this.peca.id || this.peca.id === '') {
      this.pecasService.delete(this.peca.id).then((resposta)=>{
        console.log(resposta);
        this.rota.navigate(['/pecas']);
      });
    }
  }
}
