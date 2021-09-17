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
  public pecasList: Array<Peca>  = [];

  public peca: Peca = null;

  constructor(private rotaAtiva: ActivatedRoute,
              private rota: Router,
              private pecasService: PecasService) { }

  ngOnInit() {
    const id = Number( this.rotaAtiva.snapshot.paramMap.get('id') );

    this.peca = this.pecasService.get(id);
  }

  public deletar() {
    if (this.peca.id || this.peca.id === 0) {
      this.pecasService.delete(this.peca.id);
    }

    this.rota.navigate(['/pecas']);
  }
}
