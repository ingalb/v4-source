import { IonSlides} from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-klubi',
  templateUrl: './klubi.page.html',
  styleUrls: ['./klubi.page.scss'],
})
export class KlubiPage implements OnInit {

  @ViewChild('klubiSlider', { static: true }) slideKlubi: IonSlides;
  segment = 0;

  constructor() { }

  ngOnInit() {
  }

  async segmentChanged(ev: any) {
    await this.slideKlubi.slideTo(this.segment);
  }

  async slideChanged()
  {
    this.segment = await this.slideKlubi.getActiveIndex();
  }

}
