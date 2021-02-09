import { Component, OnInit, Input } from '@angular/core';
import { ChampionsService } from 'src/services/champions/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['../app.component.css']
})
export class ChampionsComponent implements OnInit {

  @Input() champions: any;

  constructor(private Champions: ChampionsService) { }

  ngOnInit() {
  }

  delete(id: number) {
    this.Champions.delete(id);
  }

}
