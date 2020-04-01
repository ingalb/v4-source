import { Component, OnInit, ViewChild } from '@angular/core';
import { News } from '../models/news';
import { VllazniaService } from '../api/vllaznia.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage{
  offset = 0;
  news: News[];
  isLoaded = false;

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll, { static: true }) virtualScroll: IonVirtualScroll;

  constructor(private NewsService: VllazniaService) { }

  ngOnInit()  {
    console.log("oninit: "+this.isLoaded);
    this.loadNews();
  }
 
  loadNews(event?) {
    if (event) {
      this.offset += 20;
    }
    this.NewsService.getNrNews(this.offset).subscribe(news => {
    this.news = news;
    this.isLoaded = true;
    if(event)
    {
      event.target.complete();
    }
  
    if (this.news.length == 1000) {
      event.target.disabled = true;
    }
 
    });
  }

  arrayOne(n: number): any[]{
    return Array(n);
  }

  ionViewWillEnter()
  {
    this.loadNews();
  }



}
