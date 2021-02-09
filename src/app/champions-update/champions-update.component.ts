import { Component, OnInit } from '@angular/core';
import { ChampionsService } from 'src/services/champions/champions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-champions-update',
  templateUrl: './champions-update.component.html',
  styleUrls: ['./champions-update.component.css']
})
export class ChampionsUpdateComponent implements OnInit {

  errors: any = {};
  errorsLength = 0;
  champion: any;
  id: number;
  change: boolean;
  rules: any = {
    age: (e) => isNaN(e) || e === null || e === '',
    passive: (e) => e === null || e === '',
    name: (e) => e === null || e === '',
    skillQ: (e) => e === null || e === '',
    skillW: (e) => e === null || e === '',
    skillE: (e) => e === null || e === '',
    skillR: (e) => e === null || e === '',
    id: () => false // skip id validation :p
  };

  constructor(private Champions: ChampionsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.champion = this.Champions.getUserById(id);
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
      if (this.rules[field[0]](field[1])) {
        this.errors[field[0]] = true;
      } else {
        delete this.errors[field[0]];
      }
    });
  }

}
