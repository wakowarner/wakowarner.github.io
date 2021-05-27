import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  skills: Skill[] = [
    { nombre: 'Angular', nivel: 'Intermedio' },
    { nombre: 'Apache', nivel: 'Intermedio' },
    { nombre: 'Bash', nivel: 'Intermedio' },
    { nombre: 'Express', nivel: 'Intermedio' },
    { nombre: 'Firebase', nivel: 'Básico' },
    { nombre: 'Git', nivel: 'Intermedio' },
    { nombre: 'Javascript', nivel: 'Intermedio' },
    { nombre: 'Linux', nivel: 'Intermedio' },
    { nombre: 'MongoDB', nivel: 'Básico' },
    { nombre: 'MySQL', nivel: 'Intermedio' },
    { nombre: 'Node.js', nivel: 'Intermedio' },
    { nombre: 'PHP', nivel: 'Intermedio' },
    { nombre: 'PostgreSQL', nivel: 'Intermedio' },
    { nombre: 'Socket.IO', nivel: 'Intermedio' },
    { nombre: 'TypeScript', nivel: 'Intermedio' },
    { nombre: 'Wordpress', nivel: 'Intermedio' },
    { nombre: 'Docker', nivel: 'Básico' },
    { nombre: 'AWS', nivel: 'Básico' },
    { nombre: 'GraphQL', nivel: 'Básico' },
    { nombre: 'React', nivel: 'Básico' },
    { nombre: 'Redis', nivel: 'Básico' },
    { nombre: 'Sequelize', nivel: 'Básico' },
    { nombre: 'Go', nivel: 'Básico' },
    { nombre: 'Elixir', nivel: 'Básico' },
    { nombre: 'Nginx', nivel: 'Básico' },
    { nombre: 'Jest', nivel: 'Intermedio' },
    { nombre: 'REST', nivel: 'Intermedio' },
  ];

  ngOnInit() {
    this.skills.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
  }
}
