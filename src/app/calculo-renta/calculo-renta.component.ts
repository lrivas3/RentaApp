import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface Departamento {
  value: string;
  viewValue: string;
}

export interface empleados {
  apellidos: string;
  salarioNominal: number;
  ISS: number;
  AFP: number;
  renta: number;
  salarioNeto: number;
  departamento: string;
}


/**
 */
export class selectDepartamento {
  departamentos: Departamento[] = [
    {value: 'Ventas', viewValue: 'Ventas'},
    {value: 'Contabilidad', viewValue: 'Contabilidad'},
    {value: 'Informatica', viewValue: 'IT'},
  ];
}

@Component({
  selector: 'app-calculo-renta',
  templateUrl: './calculo-renta.component.html',
  styleUrls: ['./calculo-renta.component.css'],
})

export class CalculoRentaComponent implements OnInit {
  panelOpenState = false;

  selectDepartamento = new selectDepartamento();

  empleados: any[] = []; // array para los empleados ingresados

  pApellido: string = '';
  sApellido: string = '';
  salarioNominal: number = 0;
  ISS: number = 0;
  AFP: number = 0;
  sobreExedente: number = 0;
  renta: number = 0;
  salarioConRetenciones: number = 0;
  salarioNeto: number = 0;

  departamentoSeleccionado: any;

  constructor() { }

  ngOnInit(): void {
  }

  calcularDeducciones(){
    this.ISS = this.salarioNominal * 0.03;
    this.AFP = this.salarioNominal * 0.0625;

    this.salarioConRetenciones = this.salarioNominal - this.ISS - this.AFP;
  }

  calculateRenta() {

    this.calcularDeducciones();


    /* Tramo I */
    if (this.salarioConRetenciones <= 472.00) {
      this.renta = 0;
    }

    /* Tramo II */
    if (this.salarioConRetenciones >= 472.01 && this.salarioConRetenciones <= 895.24) {
      this.sobreExedente = this.salarioConRetenciones - 472;
      this.renta = (this.sobreExedente * 0.10) + 17.67
    }
    /*Tramo III*/
    if (this.salarioConRetenciones >= 895.25 && this.salarioConRetenciones <= 2038.10) {
      this.sobreExedente = this.salarioConRetenciones - 895.24;
      this.renta = (this.sobreExedente * 0.20) + 60;
    }

    /*Tramo IV*/
    if (this.salarioConRetenciones >= 2038.11) {
      this.sobreExedente = this.salarioConRetenciones - 2038.10;
      this.renta = (this.sobreExedente * 0.30) + 288.57;
    }
  }

  calcularSalarioNeto(){
    this.salarioNeto = this.salarioNominal - (this.AFP + this.ISS + this.renta);
    this.guardarEmpleado();
  }

  guardarEmpleado() {
    let empleado = {
      apellidos: this.pApellido + " " + this.sApellido,
      salarioNominal: this.salarioNominal,
      ISS: this.ISS,
      AFP: this.AFP,
      renta: this.renta,
      salarioNeto: this.salarioNeto,
      departamento: this.departamentoSeleccionado
    };

    this.empleados.push(empleado); // add the object to the array
  }

}

