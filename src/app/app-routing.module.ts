import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    loadChildren: () => import('./pages/list/list.module').then((m)=>m.ListModule)
  },
  {
    path:"create",
    loadChildren: () => import('./pages/create/create.module').then((m)=>m.CreateModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
