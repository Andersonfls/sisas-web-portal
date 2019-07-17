import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.scss']
})
export class PublicacoesComponent implements OnInit {
  arquivos: File[];

  constructor() { }

  ngOnInit() {
    this.arquivos = new Array<File>();
    const arrayOfBlob = new Array<Blob>();
    this.arquivos.push(new File(arrayOfBlob, 'Mock.zip', { type: 'application/zip' }));
  }

}
