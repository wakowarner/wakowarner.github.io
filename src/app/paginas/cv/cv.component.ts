import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  skills: string[] = ["Angular", "Apache", "Bash", "Docker", "Express", "Git", "Javascript", "Linux", "MongoDB", "MySQL", "Node.js", "PHP", "PostgreSQL", "Socket.IO", "TypeScript", "Wordpress"]

  constructor() { }

  ngOnInit(): void {
  }

}
