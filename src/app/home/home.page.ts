import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { News } from '../models/news';
import { VllazniaService } from '../api/vllaznia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  news: News[];
  constructor(private NewsService: VllazniaService, public loadingController: LoadingController) { }

  getHomepageNews(): void {
    this.NewsService.getHomeNews()
      .subscribe(news => {
        console.log(news);
        this.news = news;
      });
  }

 /*
 getHomeMatches(): void {
    this.
  }
*/
  ngOnInit() {
    this.getHomepageNews();
  }


}
