import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsFormComponent } from './champions-form.component';

describe('ChampionsFormComponent', () => {
  let component: ChampionsFormComponent;
  let fixture: ComponentFixture<ChampionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
