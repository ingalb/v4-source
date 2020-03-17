import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { VllazniaService } from '../api/vllaznia.service';
import { ActivatedRoute } from '@angular/router';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  
  news: News[];
  newsId : any;
  title : any;
  imgsrc = "https://www.fkvllaznia.net/main/vllaznia/_files/newspublish/lajme-vllaznia.gif" ;
  summary: any;
  data: any;
  article: any;

  isLoaded = false;

  constructor(private NewsService: VllazniaService, private activatedRoute: ActivatedRoute) { }

  loadInfoNews(){
    this.NewsService.getInfoNews(this.newsId).subscribe(news => {
      this.news = news; 
      this.title = this.news[0].title;
      this.imgsrc = "https://www.fkvllaznia.net/main/vllaznia/_files/newspublish/"+this.news[0].image;
      this.summary = this.news[0].summary;
      this.data = this.news[0].data;
      this.article = this.news[0].content;
      this.isLoaded = true;
    });
  }

  shareNews(){
  
    // this.socialSharing.share('Lexo lajmin per Vllaznine', this.title, this.imgsrc, 'https://www.fkvllaznia.com/lajme/'+this.newsId+'-mobile.html').then(() => {
    //   console.log("shared OK");
    // }).catch(() => {
    //   console.log("error on shared");
    // });
  
  }

  ngOnInit() {
    this.newsId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadInfoNews();
  }

  ionViewWillEnter() {
    this.loadInfoNews();
  }

}
