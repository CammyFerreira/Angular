import { Component, OnInit } from '@angular/core';
import { Salario } from 'src/app/model/salario';
import { SalarioService } from 'src/app/service/salario.service';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  styleUrls: ['./salario.component.css']
})
export class SalarioComponent implements OnInit {

  listaSalario: Salario[] = [];
  salario?: Salario;
  estaEditando = false;

  constructor(private salarioService: SalarioService) { }


  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.salarioService.listar().subscribe(salarios => {
      this.listaSalario = salarios;
    });
  }


  cancelar() {
    this.salario = undefined;
  }

  salvar() {
    if(!this.salario) {return;}

    if (!this.estaEditando) {
        this.salarioService.inserir(this.salario).subscribe(() => {
          this.listar();
          this.cancelar();
        });

    } else {
        this.salarioService.atualizar(this.salario).subscribe(() => {
          this.listar();
          this.cancelar();
        });
    }
  }

  selecionar(salario: Salario) {
      this.salario = salario;
      this.estaEditando = true;
  }

}
