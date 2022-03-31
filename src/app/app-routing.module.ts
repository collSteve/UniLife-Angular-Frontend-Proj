import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsPageComponent } from './posts-page/posts-page.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { IndividualPostPageComponent } from './individual-post-page/individual-post-page.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/posts-page', pathMatch: 'full' },
  {path: "posts-page", component: PostsPageComponent},
  {path: "post/:postid", component: IndividualPostPageComponent},
  { path: "createPost", component: CreatePostPageComponent },
  { path: "group-page", component: GroupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
