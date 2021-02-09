import { Component, OnInit, Input } from '@angular/core';
import { Champion } from 'types';

@Component({
  selector: 'app-champions-form',
  templateUrl: './champions-form.component.html',
  styleUrls: ['../app.component.css']
})
export class ChampionsFormComponent implements OnInit {

  @Input() champion: Champion;
  @Input() errors: any = {};

  constructor() { }

  ngOnInit() {
  }

}
