import { EventEmitter, Injectable } from '@angular/core';
import { Article } from './article/article.model';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles!: Article[];

  constructor() { }

  getArticles():Article[] {
    this.articles = []  
    return this.articles 
  }

  addArticle(newTitle:HTMLInputElement, newLink:HTMLInputElement) {
    this.articles.push(new Article(`${newTitle.value}`, `${newLink.value}`,0))
    console.log(`title: ${newTitle.value}, link: ${newLink.value}`)
  }

  removeArticle(article: Article) {
    console.log(`article to be removed ${article.title}`)
    const index = this.articles.indexOf(article);
    if (index !== -1) {
      this.articles.splice(index, 1);
    }
  }

  voteUp(article_enf: Article):boolean {
    article_enf.voteUp()
    return false
  }

  voteDown(article_enf: Article) {
    article_enf.voteDown()
  }

  remove(removeArticle:EventEmitter<Article>,article_enf: Article) {
    removeArticle.emit(article_enf)
  }

  sortedArticles():Article[] {
    return this.articles.sort((a:Article,b:Article) => b.votes - a.votes)
  }

}
