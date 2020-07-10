import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcasePageComponent } from "./showcase-page/showcase-page.component";


const routes: Routes = [
  { path: '', component: ShowcasePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
