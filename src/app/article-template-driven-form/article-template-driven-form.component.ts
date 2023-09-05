import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-template-driven-form',
  templateUrl: './article-template-driven-form.component.html',
  styleUrls: ['./article-template-driven-form.component.css']
})
export class ArticleTemplateDrivenFormComponent implements OnInit {

  model = new Article('','',0)

  constructor( private service: ArticleService) {

  }

  addArticle(newTitle:HTMLInputElement, newLink:HTMLInputElement) {
    this.service.addArticle(newTitle,newLink);
  }

  ngOnInit(): void {
  }

}
