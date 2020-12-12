import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookhome',
  templateUrl: './bookhome.component.html',
  styleUrls: ['./bookhome.component.css']
})
export class BookhomeComponent implements OnInit {

  @Input('namefromparent') public namefromparent;
  constructor() { }

  ngOnInit(): void {
  }

}
