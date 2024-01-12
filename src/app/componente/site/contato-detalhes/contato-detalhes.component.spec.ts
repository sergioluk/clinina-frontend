import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoDetalhesComponent } from './contato-detalhes.component';

describe('ContatoDetalhesComponent', () => {
  let component: ContatoDetalhesComponent;
  let fixture: ComponentFixture<ContatoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
