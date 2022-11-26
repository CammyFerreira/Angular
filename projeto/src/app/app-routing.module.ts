import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './views/compras/compras.component';
import { SalarioComponent } from './views/salario/salario.component';

const routes: Routes = [
  { path: 'compras', component: ComprasComponent},
  { path: 'salario', component: SalarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
