import { Component, OnInit } from '@angular/core';
import { ChampionsService } from 'src/services/champions/champions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Champion } from 'types';

@Component({
  selector: 'app-champions-update',
  templateUrl: './champions-update.component.html',
  styleUrls: ['./champions-update.component.css']
})
export class ChampionsUpdateComponent implements OnInit {

  validationRules: any = {};
  errors: any = {};
  errorsLength = 0;
  champion: Champion;
  id: number;
  change: boolean;

  constructor(private Champions: ChampionsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.champion = { ...this.Champions.getUserById(id) };
    this.validationRules = this.Champions.getValidationRules();
  }

  update() {
    this.validateFields();
    this.errorsLength = Object.values(this.errors).length;
    if (this.errorsLength <= 0) {
      this.Champions.update(this.champion).subscribe(() => {
        this.change = true;
        setTimeout(() => {
          this.change = false;
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
