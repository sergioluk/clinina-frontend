import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosDetalhesComponent } from './servicos-detalhes.component';

describe('ServicosDetalhesComponent', () => {
  let component: ServicosDetalhesComponent;
  let fixture: ComponentFixture<ServicosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
