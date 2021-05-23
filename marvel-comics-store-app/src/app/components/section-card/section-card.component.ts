import { Component, OnInit } from '@angular/core';
import { HeroisService } from 'src/app/services/herois.service';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.css']
})
export class SectionCardComponent implements OnInit {

  herois: Array<any> = [];

  constructor(private heroisService: HeroisService ) { }

  ngOnInit() { 
    this.listar();
  }
  listar() {
    this.heroisService.listar().subscribe(dados => this.herois = dados.data.results);
  }
}
