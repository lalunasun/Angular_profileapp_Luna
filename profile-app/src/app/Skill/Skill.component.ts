import { Component, EventEmitter,Input,Output,OnInit } from '@angular/core';
import {Framework} from '../app.component';
import { AnyARecord } from 'dns';

@Component({
  selector: 'app-Skill',
  templateUrl: './Skill.component.html',
  styleUrls: ['./Skill.component.css']
})

export class SkillComponent implements OnInit{
  
 @Input() items:any;
 @Output() onLanguageAdd = new EventEmitter<Framework>();

  constructor(){}
  ngOnInit() {}

  addLanguage(){
    this.onLanguageAdd.emit({
      id:Math.random(),
      name:'C#',
    })
  }


}