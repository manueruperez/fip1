import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/logos canal/FIlogo1.png',
    'assets/logos canal/FIB1.jpg',
    'assets/logos canal/FIlogo2.png',
    'assets/logos canal/template11.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
