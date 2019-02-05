import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneModalComponent } from './telefone-modal.component';

describe('TelefoneModalComponent', () => {
  let component: TelefoneModalComponent;
  let fixture: ComponentFixture<TelefoneModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefoneModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
