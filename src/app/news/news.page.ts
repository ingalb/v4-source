import { Component, OnInit, ViewChild } from '@angular/core';
import { News } from '../models/news';
import { VllazniaService } from '../api/vllaznia.service';
//import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage{
  offset = 0;
  news: News[];
  isLoaded = false;

  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private NewsService: VllazniaService) { }

  ngOnInit()  {
    console.log("oninit: "+this.isLoaded);
    this.loadNews();
  }
 
  loadNews(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 10;
    }
    this.NewsService.getAllNews().subscribe(news => {
    //this.news = [...this.news, ...news];
    console.log(this.isLoaded);
    console.log(news);
    this.news = news;
    this.isLoaded = true;
    console.log(this.isLoaded);
      if (event) {
        event.target.complete();
      }
 
    });
  }

  arrayOne(n: number): any[]{
    return Array(n);
  }



}
