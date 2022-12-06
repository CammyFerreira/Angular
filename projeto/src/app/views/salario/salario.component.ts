import { Component, OnInit } from '@angular/core';
import { Salario } from 'src/app/model/salario';
import { SalarioService } from 'src/app/service/salario.service';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  styleUrls: ['./salario.component.css']
})
export class SalarioComponent implements OnInit {

  salario?: Salario;
  estaEditando = false;

  constructor(private salarioService: SalarioService) { }


  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.salarioService.detalhar().subscribe(salario => {
      this.salario = salario;
    });
  }

  salvar() {
    if(!this.salario) {return;}

    if (!this.estaEditando) {
        this.salarioService.inserir(this.salario).subscribe(() => {
          this.listar();
        });

    } else {
        this.salarioService.atualizar(this.salario).subscribe(() => {
          this.listar();
        });
    }
  }

  selecionar(salario?: Salario) {
      this.salario = salario;
      this.estaEditando = true;
  }

}
