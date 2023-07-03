import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from '../IPensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: IPensamento = {
    conteudo: 'I Love Angular',
    autoria: 'Davi Cruz',
    modelo: 'modelo2',
    id: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
