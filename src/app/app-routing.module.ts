import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { IdeaCardComponent } from "./ideas/idea-card/idea-card.component";


const routes: Routes = [
  { path: 'about', loadChildren: () => import('./about/about.module')
      .then(m => m.AboutModule) },
  { path: 'ideas', loadChildren: () => import('./ideas/ideas.module')
      .then(m => m.IdeasModule) },
  { path: 'showcase', loadChildren: () => import('./showcase/showcase.module')
      .then(m => m.ShowcaseModule) },
  { path: 'idea', component: IdeaCardComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
