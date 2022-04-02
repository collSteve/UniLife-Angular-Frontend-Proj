import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsPageComponent } from './posts-page/posts-page.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { IndividualPostPageComponent } from './individual-post-page/individual-post-page.component';
import { IndividualGroupPageComponent } from './individual-group-page/individual-group-page.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { PostModifyType } from './models/post-models';
import { UniversityPostNumberPageComponent } from './university-post-number-page/university-post-number-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { CreateGroupPostPageComponent } from './create-group-post-page/create-group-post-page.component';
import { AccountUsernameListPageComponent } from './account-username-list-page/account-username-list-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/posts-page', pathMatch: 'full' },
  {path: "posts-page", component: PostsPageComponent},
  { path: "post/:postid", component: IndividualPostPageComponent },
  { path: "group/:groupid", component: IndividualGroupPageComponent },
  {path: "createPost", component: CreatePostPageComponent, data: {modifyType:PostModifyType.Create}},
  {path: "editPost/:postid", component: CreatePostPageComponent, data:{modifyType:PostModifyType.Edit}},
  { path: "group-page", component: GroupPageComponent },
  { path: "university-post-count", component: UniversityPostNumberPageComponent},
  { path: "my-groups", component: MyGroupsComponent },
  { path: "login-page", component: LoginPageComponent},
  { path: "sign-up-page", component: SignUpPageComponent},
  { path: "group/:groupid/createGroupPost", component: CreateGroupPostPageComponent, data:  {modifyType:PostModifyType.Create}},
  { path: "account-username-list-page", component: AccountUsernameListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
