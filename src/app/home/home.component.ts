import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public namefromparent:string;

  childData:string;
  parentMethod(data){
    this.childData=data;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
