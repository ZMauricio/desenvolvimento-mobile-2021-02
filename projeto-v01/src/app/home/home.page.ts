import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public heroes: string[] = [ 'Hulk', 'Chapolin', 'Spider-Man', 'Captain America' ];

  public selecionado = 'Eletrônica';
	public cursos = ['Matemática', 'Informática', 'Mecânica', 'Eletrônica'];


	public exibir = true;

  constructor() { }

  ngOnInit() {
  }

	mudar(): void {
		this.exibir = ! this.exibir;
	}

}
