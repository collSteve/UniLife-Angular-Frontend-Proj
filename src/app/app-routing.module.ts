import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsPageComponent } from './posts-page/posts-page.component';
import { IndividualPostPageComponent } from './individual-post-page/individual-post-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/posts-page', pathMatch: 'full' },
  {path: "posts-page", component: PostsPageComponent},
  {path: "post/:postid", component: IndividualPostPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
