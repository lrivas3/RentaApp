import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-renta',
  templateUrl: './resultado-renta.component.html',
  styleUrls: ['./resultado-renta.component.css']
})
export class ResultadoRentaComponent implements OnInit {

  @Input() dataEntrante: any;

  constructor() { }

  ngOnInit(): void {

  }
}
