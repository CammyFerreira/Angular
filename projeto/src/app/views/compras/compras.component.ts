import { Component, OnInit } from '@angular/core';
import { Compras } from 'src/app/model/compras';
import { ComprasService } from 'src/app/service/compras.service';
import { SalarioService } from 'src/app/service/salario.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  listaCompras: Compras[] = [];
  compra?: Compras;
  estaEditando = false;
  salario: number = 0;

  constructor(private comprasService: ComprasService, private salarioService: SalarioService) { }

  ngOnInit(): void {
    this.listar();
    this.listarSalario();
  }

  listar() {
    this.comprasService.listar().subscribe(compras => {
      this.listaCompras = compras;
    });
  }

  listarSalario() {
    this.salarioService.detalhar().subscribe(salario => {
      this.salario = salario.valor;
    });
  }


  novo() {
    this.compra = new Compras();
    this.estaEditando = false;
  }

  cancelar() {
    this.compra = undefined;
  }

  salvar() {
    if(!this.compra) {return;}

    if (!this.estaEditando) {
        this.comprasService.inserir(this.compra).subscribe(compras => {
          this.listar();
          this.cancelar();
        });

    } else {
        this.comprasService.atualizar(this.compra).subscribe(compras => {
          this.listar();
          this.cancelar();
        });
    }
  }

  excluir(id?: number) {
    if (!id) { return }

    const resposta = confirm('Deseja excluir essa compra?');

    if (resposta)
      this.comprasService.excluir(id).subscribe( () => {this.listar();} );
  }

  selecionar(compra: Compras) {
      this.compra = compra;
      this.estaEditando = true;
  }

  converter(valor: number){
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  somar(): number{
    let soma = 0;
    this.listaCompras.forEach(compra => {
      soma += compra.valor;
    });
    return soma;  
  }

  restante(){
    return this.salario - this.somar();
  }
}
