import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from './article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

@Input()
article_enf!: Article

@Output()
removeArticle = new EventEmitter<Article>()

  constructor(private service:ArticleService) {}

  voteUp():boolean {
    this.service.voteUp(this.article_enf)
    return false
  }

  voteDown():boolean {
    this.service.voteDown(this.article_enf)
    return false
  }

  remove(article_enf:Article) {
    this.service.remove(this.removeArticle,article_enf)
  }
}
