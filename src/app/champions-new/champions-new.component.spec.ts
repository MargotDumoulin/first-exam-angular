import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsNewComponent } from './champions-new.component';

describe('ChampionsNewComponent', () => {
  let component: ChampionsNewComponent;
  let fixture: ComponentFixture<ChampionsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
