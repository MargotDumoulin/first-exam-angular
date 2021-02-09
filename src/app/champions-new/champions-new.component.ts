import { ChampionsService } from 'src/services/champions/champions.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Champion } from 'types';

@Component({
  selector: 'app-champions-new',
  templateUrl: './champions-new.component.html',
  styleUrls: ['../app.component.css']
})
export class ChampionsNewComponent implements OnInit {

  validationRules: any = {};
  champion: Champion  = {
    isWomen: null,
    name: null,
    image: null,
    age: null,
    passive: null,
    skillQ: null,
    skillW: null,
    skillE: null,
    skillR: null
  };
  errors: any = {};
  errorsLength = 0;
  confirm: boolean;

  constructor(private Champions: ChampionsService, private router: Router) { }

  ngOnInit() {
    this.validationRules = this.Champions.getValidationRules();
  }

  add() {
    this.validateFields();
    this.errorsLength = Object.values(this.errors).length;
    if (this.errorsLength <= 0) {
      this.Champions.add(this.champion).subscribe(() => {
        this.champion = {
          isWomen: null,
          name: null,
          image: null,
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
      if (this.validationRules[field[0]](field[1])) {
        this.errors[field[0]] = true;
      } else {
        delete this.errors[field[0]];
      }
    });
  }

}
