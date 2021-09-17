import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PecasService } from './../services/pecas.service';
import { Peca } from './../model/peca.model';

@Component({
  selector: 'app-pecas-update',
  templateUrl: './pecas-update.page.html',
  styleUrls: ['./pecas-update.page.scss'],
})
export class PecasUpdatePage implements OnInit {
  public peca: Peca = new Peca();

  constructor(private pecasService: PecasService,
              private rotaAtiva: ActivatedRoute,
              private rota: Router) {}

  ngOnInit() {
    const codigo = Number( this.rotaAtiva.snapshot.paramMap.get('id') );
    this.peca = this.pecasService.get(codigo);
  }

  public atualizar() {
    this.pecasService.update(this.peca);
    this.rota.navigate(['/pecas']);
  }

}
