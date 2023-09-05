import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleService } from './article.service';
import { HttpserviceService } from './httpservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  model = new Article('','',0)

  title = 'articleApp';

  articles_parents: Article[] = []

  constructor(private service:HttpserviceService) {
  }
  ngOnInit(): void {
    this.getArticles()
  }

  addArticle(newTitle:HTMLInputElement, newLink:HTMLInputElement) {
    this.service.addArticle(newTitle,newLink);
  }

  removeArticle(article: Article) {
    this.service.deleteArticle(article.id).subscribe((date)=>{this.getArticles()})
//    this.service.removeArticle(article)
  }

  sortedArticles():Article[] {
    return this.articles_parents.sort((a: Article, b: Article) => b.votes - a.votes)
  }
 
  getArticles() {
    this.service.getArticles().subscribe(restArticles => this.articles_parents = restArticles)
  }

}
