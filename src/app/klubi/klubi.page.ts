import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klubi',
  templateUrl: './klubi.page.html',
  styleUrls: ['./klubi.page.scss'],
})
export class KlubiPage implements OnInit {

  contentInit = true;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {

    console.log('Segment changed', ev.detail.value);
    if(ev.detail.value==="historia")
    {
      this.contentInit = true;
    }
    else
    {
      this.contentInit = false;
    }
  }

}
