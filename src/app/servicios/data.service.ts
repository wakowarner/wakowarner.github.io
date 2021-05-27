import { Injectable } from '@angular/core';
import { Social, SocialLinks } from '../models/social.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  specs: Social[] = [
    {
      nombre: 'Twitter',
      descripcion: '@akkonomi',
      url: SocialLinks.Twitter
    },
    {
      nombre: 'LinkedIn',
      descripcion: 'Rodrigo Patiño',
      url: SocialLinks.Linkedin
    },
    {
      nombre: 'Instagram',
      descripcion: '@haskellcatalv',
      url: SocialLinks.Instagram
    },
    {
      nombre: 'GitHub',
      descripcion: '@4k1k0',
      url: SocialLinks.Github
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
      url: SocialLinks.RedBubble
    },
    {
      nombre: 'Last.fm',
      descripcion: 'wakogitmu',
      url: SocialLinks.LastFM
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
