import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  
import { PostModule } from './post/post.module';
import { HomeComponent } from './home/home.component';
import { BookhomeComponent } from './home/bookhome/bookhome.component';
import { FormsModule } from '@angular/forms';
  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }