import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ArticleTemplateDrivenFormComponent } from './article-template-driven-form/article-template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleTemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
