import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { IdeasRoutingModule } from './ideas-routing.module';
import { IdeaCardComponent } from './idea-card/idea-card.component';
import { IdeaCardListComponent } from './idea-card-list/idea-card-list.component';
import { IdeaWizardComponent } from './idea-wizard/idea-wizard.component';

@NgModule({
  declarations: [IdeaCardComponent, IdeaCardListComponent, IdeaWizardComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    IdeasRoutingModule
  ],
  bootstrap: [IdeaCardListComponent]
})
export class IdeasModule { }
