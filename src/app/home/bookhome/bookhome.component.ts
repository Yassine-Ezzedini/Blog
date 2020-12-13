import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookhome',
  templateUrl: './bookhome.component.html',
  styleUrls: ['./bookhome.component.css']
})
export class BookhomeComponent implements OnInit {

  @Input('namefromparent') public namefromparent;
  
  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();
  
  passData(){
    this.notify.emit("YESSS");
    console.log(this.notify.emit("YESSS"))
  }


  constructor() { }

  ngOnInit(): void {
  }

}
