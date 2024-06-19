import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

//import { User } from '../user-list/user-list.types'

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() user: any = {
    name: "",
    age: 0
  }

  @Output() changePrincipalUser = new EventEmitter<string>();



  handleChangePricipalUserClick() {
    this.changePrincipalUser.emit(this.user.name)
    console.log(this.user);
  }

}
