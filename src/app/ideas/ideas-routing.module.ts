import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaCardListComponent } from "./idea-card-list/idea-card-list.component";


const routes: Routes = [
  { path: '', component: IdeaCardListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeasRoutingModule { }
