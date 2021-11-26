import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PecasService } from './../services/pecas.service';

import { Peca } from './../model/peca.model';


@Component({
  selector: 'app-pecas-add',
  templateUrl: './pecas-add.page.html',
  styleUrls: ['./pecas-add.page.scss'],
})
export class PecasAddPage implements OnInit {
  public peca: Peca = new Peca();

  constructor(private pecasService: PecasService, private rota: Router) { }

  ngOnInit() {
  }

  public adicionar() {
    if (this.peca.nome !== null && this.peca.nome !== undefined) {


      this.pecasService.add(this.peca).then((resultado) => {
        console.log(resultado);

        this.rota.navigate(['/pecas']);
      }).catch( (error)=> {
        console.log(error);
      });



    }
  }

}
