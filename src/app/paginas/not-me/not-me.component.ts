import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { Social } from '../../models/social.model';

@Component({
  selector: 'app-not-me',
  templateUrl: './not-me.component.html',
  styleUrls: ['./not-me.component.scss']
})
export class NotMeComponent implements OnInit {

  specs: Social[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.specs = this.dataService.specs;
  }

}
