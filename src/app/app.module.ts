import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './auth/login/login.component';
import { BloglistComponent } from './blog/bloglist/bloglist.component';
import { BlogitemComponent } from './blog/blogitem/blogitem.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, BloglistComponent, BlogitemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
