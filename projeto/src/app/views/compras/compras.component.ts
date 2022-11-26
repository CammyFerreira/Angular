import { Component, OnInit } from '@angular/core';
import { Compras } from 'src/app/model/compras';
import { ComprasService } from 'src/app/service/compras.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  listaCompras: Compras[] = [];
  compra?: Compras;
  estaEditando = false;
  valorTotal = 0;

  constructor(private comprasService: ComprasService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.comprasService.listar().subscribe(compras => {
      this.listaCompras = compras;
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

}
