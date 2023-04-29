export class Empleado {
    cedula: string;
    nombre: string;
    apellido: string;
    sexo: string;
    salario: number;

    constructor(cedula: string, nombre: string, apellido: string, sexo: string, salario: number) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.salario = salario;
    }
}