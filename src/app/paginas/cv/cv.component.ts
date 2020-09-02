import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

  skills: string[] = ["Angular", "Apache", "Bash", "Docker", "Express", "Git", "Javascript", "Linux", "MongoDB", "MySQL", "Node.js", "PHP", "PostgreSQL", "Socket.IO", "TypeScript", "Wordpress"];

  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;

  constructor() { }

}
