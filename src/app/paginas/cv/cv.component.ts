import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  skills: string[] = [
    "Angular",
    "Apache",
    "Bash",
    "Express",
    "Firebase",
    "Git",
    "Javascript",
    "Linux",
    "MongoDB",
    "MySQL",
    "Node.js",
    "PHP",
    "PostgreSQL",
    "Socket.IO",
    "TypeScript",
    "Wordpress"
  ];

  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faGithub = faGithub;

  constructor() { }

  ngOnInit() {
    this.skills.sort();
  }

}
