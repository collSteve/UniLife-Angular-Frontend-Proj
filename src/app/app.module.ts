import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import { TestCompComponent } from './test-comp/test-comp.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { IndividualPostPageComponent } from './individual-post-page/individual-post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    PostsPageComponent,
    HeaderNavbarComponent,
    IndividualPostPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
