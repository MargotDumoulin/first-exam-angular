import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsUpdateComponent } from './champions-update.component';

describe('ChampionsUpdateComponent', () => {
  let component: ChampionsUpdateComponent;
  let fixture: ComponentFixture<ChampionsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
