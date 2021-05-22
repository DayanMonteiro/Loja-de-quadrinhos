import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionCardComponent } from './components/section-card/section-card.component';
import { OfertasListaComponent } from './components/ofertas/ofertas-lista/ofertas-lista.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    SectionCardComponent,
    OfertasListaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
