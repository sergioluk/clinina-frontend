import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/site/home/home.component';
import { SobreDetalhesComponent } from './componente/site/sobre-detalhes/sobre-detalhes.component';
import { ServicosDetalhesComponent } from './componente/site/servicos-detalhes/servicos-detalhes.component';
import { EquipeDetalhesComponent } from './componente/site/equipe-detalhes/equipe-detalhes.component';
import { ContatoDetalhesComponent } from './componente/site/contato-detalhes/contato-detalhes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sobre',
    component: SobreDetalhesComponent
  },
  {
    path: 'servicos',
    component: ServicosDetalhesComponent
  },
  {
    path: 'equipe',
    component: EquipeDetalhesComponent
  },
  {
    path: 'contato',
    component: ContatoDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
