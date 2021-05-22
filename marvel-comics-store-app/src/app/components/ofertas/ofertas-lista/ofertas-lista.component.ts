import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-ofertas-lista',
  templateUrl: './ofertas-lista.component.html',
  styleUrls: ['./ofertas-lista.component.css']
})
export class OfertasListaComponent implements OnInit {

/*
  timestamp = new Date().getTime();

  hash = Md5.hashStr(this.timestamp+"fec724da5a8ac11f692746467ad20d86"+"5395a0d3a2be3adaffdc915bbd87636e15866aed");

  baseUrl = `http://gateway.marvel.com/v1/public/comics?apikey=fec724da5a8ac11f692746467ad20d86&ts=${this.timestamp}&hash=${this.hash}`;

  constructor(private http: HttpClient) { }

  // ofertas: string[] = []
  */
  
  ngOnInit(): void {
    
  }
  /*
  read(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  errorHandler(e: any): Observable<any>{
    console.log('Ocorreu um erro!', true);
    return EMPTY
  }

  */
}

