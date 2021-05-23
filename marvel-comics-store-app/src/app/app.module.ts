import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SectionCardComponent } from './components/section-card/section-card.component';
import { OfertasListaComponent } from './components/ofertas/ofertas-lista/ofertas-lista.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeroisService } from './services/herois/herois.service';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { ModalModule } from './components/modal/modal.module';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    SectionCardComponent,
    OfertasListaComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    routing,
    ModalModule
  
  ],
  providers: [ HeroisService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
