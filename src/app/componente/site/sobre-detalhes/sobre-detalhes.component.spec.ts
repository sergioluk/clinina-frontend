import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreDetalhesComponent } from './sobre-detalhes.component';

describe('SobreDetalhesComponent', () => {
  let component: SobreDetalhesComponent;
  let fixture: ComponentFixture<SobreDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
