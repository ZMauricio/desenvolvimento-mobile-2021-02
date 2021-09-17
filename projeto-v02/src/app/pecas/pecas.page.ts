import { Component, OnInit } from '@angular/core';

import { PecasService } from '../services/pecas.service';

import { Peca } from './../model/peca.model';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.page.html',
  styleUrls: ['./pecas.page.scss']
})
export class PecasPage implements OnInit {

  public pecasList: Array<Peca> = [];

  constructor(private pecasService: PecasService) { }

  ngOnInit() {
    this.pecasList = this.pecasService.getAll();
    // console.log(this.pecasService.getAll());
  }

}
