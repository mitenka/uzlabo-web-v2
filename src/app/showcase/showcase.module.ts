import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcasePageComponent } from './showcase-page/showcase-page.component';


@NgModule({
  declarations: [ShowcasePageComponent],
  imports: [
    CommonModule,
    ShowcaseRoutingModule
  ]
})
export class ShowcaseModule { }
