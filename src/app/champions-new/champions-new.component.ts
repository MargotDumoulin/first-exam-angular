import { ChampionsService } from 'src/services/champions/champions.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Champion } from 'types';

@Component({
  selector: 'app-champions-new',
  templateUrl: './champions-new.component.html',
  styleUrls: ['./champions-new.component.css']
})
export class ChampionsNewComponent implements OnInit {

  champion: Champion  = {
    name: null,
    age: null,
    passive: null,
    skillQ: null,
    skillW: null,
    skillE: null,
    skillR: null
  };
  rules: any = {
    name: (e) => e === null || e === '',
    age: (e) => isNaN(e) || e === null || e === '',
    passive: (e) => e === null || e === '',
    skillQ: (e) => e === null || e === '',
    skillW: (e) => e === null || e === '',
    skillE: (e) => e === null || e === '',
    skillR: (e) => e === null || e === ''
  };
  errors: any = {};
  errorsLength = 0;
  confirm: boolean;

  constructor(private Champions: ChampionsService, private router: Router) { }

  ngOnInit() {
  }

  add() {
    this.validateFields();
    this.errorsLength = Object.values(this.errors).length;
    if (this.errorsLength <= 0) {
      this.Champions.add(this.champion).subscribe(() => {
        this.champion = {
          name: null,
          age: null,
          passive: null,
          skillQ: null,
          skillW: null,
          skillE: null,
          skillR: null
        };

        this.confirm = true;
          setTimeout(() => {
            this.confirm = false;
            this.router.navigate(['/champions']);
          }, 2000);
      });
    }
  }

  validateFields() {
    const champion = Object.entries(this.champion);
    champion.forEach(field => {
      if (this.rules[field[0]](field[1])) {
        this.errors[field[0]] = true;
      } else {
        delete this.errors[field[0]];
      }
    });
  }

}
