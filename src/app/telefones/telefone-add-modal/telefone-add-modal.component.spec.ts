import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneAddModalComponent } from './telefone-add-modal.component';

describe('TelefoneAddModalComponent', () => {
  let component: TelefoneAddModalComponent;
  let fixture: ComponentFixture<TelefoneAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefoneAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
