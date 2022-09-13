import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo: "post/list"
  },
  {
    path:"post/create",
    loadChildren: () => import('./pages/create/create.module').then((m)=>m.CreateModule)
  },
  {
    path:"post/list",
    pathMatch:'full',
    loadChildren: () => import('./pages/list/list.module').then((m)=>m.ListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
