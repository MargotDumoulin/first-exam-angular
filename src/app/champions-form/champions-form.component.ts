import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-champions-form',
  templateUrl: './champions-form.component.html',
  styleUrls: ['./champions-form.component.css']
})
export class ChampionsFormComponent implements OnInit {

  @Input() champion: any = {};
  @Input() errors: any = {};

  constructor() { }

  ngOnInit() {
  }

}
