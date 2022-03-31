import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import { TestCompComponent } from './test-comp/test-comp.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { IndividualPostPageComponent } from './individual-post-page/individual-post-page.component';
import { IndividualGroupPageComponent } from './individual-group-page/individual-group-page.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { UniversityPostNumberPageComponent } from './university-post-number-page/university-post-number-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    PostsPageComponent,
    HeaderNavbarComponent,
    IndividualPostPageComponent,
    IndividualGroupPageComponent,
    CreatePostPageComponent,
    UniversityPostNumberPageComponent,
    GroupPageComponent,
    MyGroupsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatTabsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
