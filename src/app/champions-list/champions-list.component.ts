import { ChampionsService } from 'src/services/champions/champions.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import './champions-list.component.css';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.css']
})
export class ChampionsListComponent implements OnInit, OnDestroy {

  champions: any = [];
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
