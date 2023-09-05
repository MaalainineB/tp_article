import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article/article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  addArticle(newTitle: HTMLInputElement, newLink: HTMLInputElement) {
    this.postArticle(new Article(newTitle.value,newLink.value)).subscribe((data) => {this.getArticles()})
    location.reload()
    return false
  }

  constructor(private client:HttpClient) { }

  getArticles():Observable<Article[]>{
    return this.client.get<Article[]>('http://localhost:3000/articles')
  }

  postArticle(article:Article):Observable<Article[]> {
    return this.client.post<Article[]>('http://localhost:3000/articles', article);
  }

  deleteArticle(id:number): Observable<any> {
    return this.client.delete('http://localhost:3000/articles/'+id)
  }

  
}
