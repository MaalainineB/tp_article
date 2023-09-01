import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles():Article[] {
    console.log('Voici les articles')
    return [
      new Article('Angular 2', 'http://angular.io',0),
      new Article('Fullstack', 'http://fullstack.io',0),
      new Article('Angular 3', 'http://angular.io',0),
      new Article('Fullstack 2', 'http://fullstack.io',0)
    ]
  }

/*
  voteUp() : boolean {
    this.article.voteUp()
    return false
    -->
}
*/
}
