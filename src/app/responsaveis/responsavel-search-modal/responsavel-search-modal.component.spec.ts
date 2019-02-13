import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsavelSearchModalComponent } from './responsavel-search-modal.component';

describe('ResponsavelSearchModalComponent', () => {
  let component: ResponsavelSearchModalComponent;
  let fixture: ComponentFixture<ResponsavelSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsavelSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsavelSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
