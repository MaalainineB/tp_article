import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleService } from './article.service';
import { HttpserviceService } from './httpservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TP2';
  articles: Article[] = [] // <-- component property

  updateOn: boolean = false
  selectedArticle: Article = new Article('dummy','link')

  constructor(private service: HttpserviceService) {
  }

  ngOnInit(): void {
    this.service
    .getArticles()
    .subscribe(restArticles => this.articles = restArticles)
  }

//addArticle(title: HTMLInputElement, link: HTMLInputElement) {
  //const newArticle = new Article(title.value,link.value,0 )
    
  //  this.service.postArticle(newArticle).subscribe((addedArticle) => {
    //  this.articles.push(addedArticle)
  //  })
//    return false
//    }


  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`input ${title.value}`)
    this.service.addArticle(new Article(title.value,link.value)).subscribe((data) => {
      this.getArticles()
    })
    location.reload()
    return false
    }

    selectArticle(article: Article) {
      console.log("je suis arrivé ici qm")
      this.selectedArticle = article
      this.deleteArticle(article.id)
    }

    deleteArticle(id: number) {
      this.service.deleteArticle(id).subscribe((data) => {
        this.getArticles()
      })
    }

  getArticles(){
    this.service.getArticles().subscribe((a) => (this.articles = a))
  }

  sortedArticles(): Article[] {
      return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }



}
