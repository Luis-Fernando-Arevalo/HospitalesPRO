import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input("valor") progreso: number = 50;
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  @Input() btnClass: string = "btn btn-primary";

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return (this.progreso = 100);
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return (this.progreso = 0);
    }

    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }
}
