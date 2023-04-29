import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  @Input() todos: number; //Declaración de variable para recibir valores de otro componente
  @Input() masculino: number; //Declaración de variable para recibir valores de otro componente
  @Input() femenino: number; //Declaración de variable para recibir valores de otro componente

  @Output() countRadioButtonEmp = new EventEmitter<string>(); //Inicialización de variable para enviar valor al componente Padre

  radbutSeleccionado = 'Todos';

  constructor() {
    this.todos = 0; //Inicialización de las variables
    this.femenino = 0; //Inicialización de las variables
    this.masculino = 0; //Inicialización de las variables
  }

  ngOnInit(): void {
    console.log(this.todos);
  }

  //Metodo de asignación del valor de radio seleccionado al componente padre
  //Metodo se debe ejecutar cada vez que el radio cambie
  radioChange() {
    this.countRadioButtonEmp.emit(this.radbutSeleccionado);
  }

}
