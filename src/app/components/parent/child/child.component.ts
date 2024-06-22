import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

  @Input()  text : string = '';
  @Output() textChange = new EventEmitter<string>();



  handleClick() {
    this.text = "Child. 🚀"
    this.textChange.emit(this.text)
  }


}


