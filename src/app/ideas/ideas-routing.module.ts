import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaCardListComponent } from "./idea-card-list/idea-card-list.component";
import { IdeaWizardComponent } from "./idea-wizard/idea-wizard.component";


const routes: Routes = [
  { path: '', component: IdeaCardListComponent },
  { path: 'new', component: IdeaWizardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeasRoutingModule { }
