import { Injectable } from '@angular/core';
import { Social } from '../models/social.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  specs: Social[] = [
    {
      nombre: 'Twitter',
      descripcion: '@akkonomi',
      url: 'https://twitter.com/akkonomi'
    },
    {
      nombre: 'LinkedIn',
      descripcion: 'Rodrigo Patiño',
      url: 'https://www.linkedin.com/in/rodrigo-pati%C3%B1o-38924a186/'
    },
    {
      nombre: 'Instagram',
      descripcion: '@haskellcatalv',
      url: 'https://www.instagram.com/haskellcatalv'
    },
    {
      nombre: 'GitHub',
      descripcion: '@4k1k0',
      url: 'https://github.com/4k1k0'
    },
    {
      nombre: 'Age',
      descripcion: '28'
    },
    {
      nombre: 'Editor',
      descripcion: 'Vim'
    },
    {
      nombre: 'Type',
      descripcion: 'Ghost'
    },
    {
      nombre: 'Location',
      descripcion: 'Mexico City'
    }, {
      nombre: 'Redbubble',
      descripcion: '4k1k0-zyx',
      url: 'https://www.redbubble.com/es/people/4k1k0-zyx/shop'
    },
    {
      nombre: 'Last.fm',
      descripcion: 'wakogitmu',
      url: 'https://www.last.fm/user/wakogitmu'
    },
    {
      nombre: 'PSN',
      descripcion: 'wakogitv'
    }
  ];

  constructor() {
    this.specs.sort((a: Social, b: Social) => a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1);
  }
}
