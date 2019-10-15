import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoDetailComponent } from './partido-detail.component';

describe('PartidoDetailComponent', () => {
  let component: PartidoDetailComponent;
  let fixture: ComponentFixture<PartidoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
