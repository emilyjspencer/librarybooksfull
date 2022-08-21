import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { BooksComponent } from './books/books.component';
import { BooksService } from './books.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecommendedDialogComponent } from './recommended-dialog/recommended-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    RecommendedDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [BooksService]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
