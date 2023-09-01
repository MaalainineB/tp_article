import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article

  @Output()
  articleSelected= new EventEmitter<Article>()

  constructor(private s: ArticleService) {
    this.article = new Article('dummy','http',100)
  }

  voteUp() : boolean {
      this.article.voteUp()
      return false
  }

  voteDown() {
      this.article.voteDown()
      return false
  }

  ngOnInit(): void {
  }

  deleteArticle(article: Article) {
    this.articleSelected.emit(article)
   }

}
