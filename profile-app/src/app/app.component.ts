import { Component } from '@angular/core';

export interface Framework{
  id:number;
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-app';
  items: Framework[]=[
    {      id:1,name:'React'    },
    {      id:2,name:'Vue'    },
    {      id:3,name:'Angular'    },
    {      id:4,name:'Angular'    },
    {      id:5,name:'Angular'    },
    {      id:6,name:'Angular'    },

  ];
  handleLanguageAdd(framework:Framework){
    this.items.push(framework);
  }
}
