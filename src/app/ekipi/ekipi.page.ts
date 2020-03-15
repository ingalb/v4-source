import { Component, OnInit } from '@angular/core';
import { VllazniaService } from '../api/vllaznia.service';

@Component({
  selector: 'app-ekipi',
  templateUrl: './ekipi.page.html',
  styleUrls: ['./ekipi.page.scss'],
})
export class EkipiPage implements OnInit {

  sezoniId = "superliga";
  ekipiId = "vllaznia";
  ekipi : any;
  
  constructor(private EkipiService: VllazniaService) { }

  ngOnInit() {
    this.loadEkipi();
  }

  loadEkipi()
  {
    this.EkipiService.getAllEkipi(this.sezoniId, this.ekipiId).subscribe(EkipiList => {
       this.ekipi = EkipiList;
       console.log(this.ekipi);
    });
  }

}
