import { ChampionsService } from 'src/services/champions/champions.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Champion } from 'types';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['../app.component.css']
})
export class ChampionsListComponent implements OnInit, OnDestroy {

  champions: Champion[] = [];
  championsSubscription: Subscription;

  constructor(private Champions: ChampionsService) { }

  ngOnInit() {
    this.championsSubscription = this.Champions.championsSubject.subscribe((championsList) => {
      this.champions = championsList;
    });
    this.Champions.emitChampionsSubject();
  }

  ngOnDestroy() {
    this.championsSubscription.unsubscribe();
  }

}
