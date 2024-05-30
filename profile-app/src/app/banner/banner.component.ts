import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
  })
  export class BannerComponent implements OnInit {
    profile_bg:string='';
    constructor() { }

    ngOnInit() {
      this.profile_bg ='/assets/bg2826-9rnl-400h.png'   
    }

  }
