import { Component, ViewChild } from '@angular/core';
import { LoadingController, IonSlides } from '@ionic/angular';
import { News } from '../models/news';
import { VllazniaService } from '../api/vllaznia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('homeSlider', { static: true }) protected slides: IonSlides;
  
  news: News[];
  constructor(private NewsService: VllazniaService, public loadingController: LoadingController) { }

  getHomepageNews(): void {
    this.NewsService.getHomeNews()
      .subscribe(news => {
        console.log(news);
        this.news = news;
        this.slides.update().then(() => {
          console.log("updated");
        });
      });
  }

 /*
 getHomeMatches(): void {
    this.
  }
*/
  ngOnInit() {
    this.getHomepageNews();
    console.log("On Init");
  }

  ionViewWillEnter() {
    this.getHomepageNews();
    console.log("ionViewDidLoad");
  }




}
