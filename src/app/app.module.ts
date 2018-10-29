import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelTopComponent } from './panel-top/panel-top.component';
import { PanelTopListComponent } from './panel-top-list/panel-top-list.component';
import { NavigateButtonComponent } from './navigate-button/navigate-button.component';
import { SlideHomeComponent } from './slide-home/slide-home.component';
import { SlideAboutComponent } from './slide-about/slide-about.component';
import { SlideProjectsComponent } from './slide-projects/slide-projects.component';
import { SlideContactComponent } from './slide-contact/slide-contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoCombinedComponent } from './logo-combined/logo-combined.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelTopComponent,
    PanelTopListComponent,
    NavigateButtonComponent,
    SlideHomeComponent,
    SlideAboutComponent,
    SlideProjectsComponent,
    SlideContactComponent,
    SidebarComponent,
    LogoCombinedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
