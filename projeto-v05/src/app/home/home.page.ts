import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public categoriaSlides = {
    slidesPerView: 3.5,
    spaceBetween: 10,
    slidesOffsetBefore: 11,
    freeMode: true
  };

  public servicosSlide = {
    slidesPerView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true
  };

  public promocoesSlide = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true
  };

  public categorias: Array<any> = [
    {
      image: './../../assets/img/categories/pneus.png'
    },
    {
      image: './../../assets/img/categories/acessorios.png'
    },
    {
      image: './../../assets/img/categories/ar.png'
    },
    {
      image: './../../assets/img/categories/motor.png'
    },
    {
      image: './../../assets/img/categories/iluminacao.png'
    },
    {
      image: './../../assets/img/categories/ferramentas.png'
    }
  ];

  public servicos: Array<any> = [
    {
      name: 'Freios',
      image: './../../assets/img/services/brake-repair.jpg'
    },
    {
      name: 'Pneus',
      image: './../../assets/img/services/tire-car-change.jpg'
    },
    {
      name: 'Alinhamento',
      image: './../../assets/img/services/car-alignment.jpg'
    },
    {
      name: 'Óleo',
      image: './../../assets/img/services/oil-change.jpg'
    },
    {
      name: 'Motor',
      image: './../../assets/img/services/motor-repair.jpg'
    }
  ];

  public promocoes: Array<any> = [
    {
      name: 'Faróis (kit)',
      rating: '4.5',
      ratings: '(500+)',
      price: 'R$ 150.46 reais',
      image: './../../assets/img/promotions/farol.jpg'
    },
    {
      name: 'Pastilhas de freio',
      rating: '4.5',
      ratings: '(500+)',
      price: 'R$ 200.50 reais',
      image: './../../assets/img/promotions/pastilha-freio.jpg'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
