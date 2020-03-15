import { IonSlides} from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-klubi',
  templateUrl: './klubi.page.html',
  styleUrls: ['./klubi.page.scss'],
})
export class KlubiPage implements OnInit {

  @ViewChild('klubiSlider', { static: true }) protected slideKlubi: IonSlides;
  contentInit = true;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {

    console.log('Segment changed', ev.detail.value);
    if(ev.detail.value==="historia")
    {
      this.contentInit = true;
      this.slideKlubi.slideTo(0);
    }
    else
    {
      this.contentInit = false;
      this.slideKlubi.slideTo(1);
    }
  }

}
