import { Component } from '@angular/core';
import { ChampionsService } from 'src/services/champions/champions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Champ Mania';

  constructor(private Champions: ChampionsService) {}
}
