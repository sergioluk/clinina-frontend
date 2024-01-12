import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { BannerComponent } from './componente/banner/banner.component';
import { SobreComponent } from './componente/sobre/sobre.component';
import { ServicosComponent } from './componente/servicos/servicos.component';
import { EquipeComponent } from './componente/equipe/equipe.component';
import { ContatoComponent } from './componente/contato/contato.component';
import { LocalizacaoComponent } from './componente/localizacao/localizacao.component';
import { FooterComponent } from './componente/footer/footer.component';
import { WhatsappComponent } from './componente/whatsapp/whatsapp.component';
import { HomeComponent } from './componente/site/home/home.component';
import { SobreDetalhesComponent } from './componente/site/sobre-detalhes/sobre-detalhes.component';
import { ServicosDetalhesComponent } from './componente/site/servicos-detalhes/servicos-detalhes.component';
import { EquipeDetalhesComponent } from './componente/site/equipe-detalhes/equipe-detalhes.component';
import { ContatoDetalhesComponent } from './componente/site/contato-detalhes/contato-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SobreComponent,
    ServicosComponent,
    EquipeComponent,
    ContatoComponent,
    LocalizacaoComponent,
    FooterComponent,
    WhatsappComponent,
    HomeComponent,
    SobreDetalhesComponent,
    ServicosDetalhesComponent,
    EquipeDetalhesComponent,
    ContatoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
