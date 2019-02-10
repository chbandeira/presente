import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaSearchModalComponent } from './turma-search-modal.component';

describe('TurmaSearchModalComponent', () => {
  let component: TurmaSearchModalComponent;
  let fixture: ComponentFixture<TurmaSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
