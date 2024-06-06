import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  about_me:string='';
  aboutme={
    summary:" 3+ years of experience. Proficient in front-end tech skills including HTML/CSS, and JavaScript. Hands-on experience with jQuery, Angular,and React, RESTful API, acquired through real projects and tutorials.Skilled in SQL for database management and manipulation. Utilize Python for automation tasks, boosting efficiency.",
  }
  constructor() { }

  ngOnInit() {
  }

}
