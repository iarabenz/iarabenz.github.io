import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxConveyerModule } from '@egjs/ngx-conveyer';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ImageViewerComponent } from './work/image-viewer/image-viewer.component';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    AboutComponent,
    ContactComponent,
    WorkComponent,
    HomeComponent,
    ImageViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
