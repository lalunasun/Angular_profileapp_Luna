import { Component, OnInit } from '@angular/core';
import { first, last } from 'rxjs';

  @Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
  })
  export class BannerComponent implements OnInit {
    profile_bg:string='';
    user={
      first_name: 'Luna',
      last_name:'Sun',
      jobtitle:'Front-end Devloper',
      avatar:'/assets/bg2826-9rnl-400h.png',
      avatar_profile:'/assets/ellipse12826-po3l-400h.png',
      avatar_profile_bg:'/assets/ellipse22826-try8-400h.png',
    }
    constructor() { }

    ngOnInit() {
 
    }

    btnFn(){
      alert('Hi~~~');
    }

  }
