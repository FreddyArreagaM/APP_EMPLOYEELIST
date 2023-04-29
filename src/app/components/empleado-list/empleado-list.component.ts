import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  listEmpleado: Empleado[] = [
    { cedula: '0989488488', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 1200 },
    { cedula: '0987884112', nombre: 'Christopher', apellido: 'Gonzalez', sexo: 'Masculino', salario: 1500 },
    { cedula: '0941551588', nombre: 'Lizbeth', apellido: 'Cajamarca', sexo: 'Femenino', salario: 1450 },
    { cedula: '0961518848', nombre: 'Victor', apellido: 'Parrales', sexo: 'Masculino', salario: 1300 },
    { cedula: '0951477723', nombre: 'Leonela', apellido: 'Roman', sexo: 'Femenino', salario: 1350 },
    { cedula: '1236484444', nombre: 'Bryan', apellido: 'Hidalgo', sexo: 'Masculino', salario: 1400 },
    { cedula: '1778888894', nombre: 'Adriana', apellido: 'Loor', sexo: 'Femenino', salario: 1150 },
    { cedula: '1478322692', nombre: 'Jorge', apellido: 'Neira', sexo: 'Masculino', salario: 1700 },
    { cedula: '1221514488', nombre: 'Daniela', apellido: 'Mendoza', sexo: 'Femenino', salario: 1950 },
  ];

  radbutSeleccionado = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obt_totalempleados(): number {
    return this.listEmpleado.length;
  }

  obt_totalFemenino(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Femenino').length;
  }

  obt_totalMasculino(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Masculino').length;
  }

  countEmpleados(radiobutselec: string) {
    this.radbutSeleccionado = radiobutselec;
  }
}
