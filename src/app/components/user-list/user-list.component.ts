import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from './user-list.types';
import { ApiServiceService } from '../../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnChanges, OnInit {

  pricipalUser: string | null = null
  users: string[] | null = null

/*   userList: User[] = [
    {
      name: "Jose",
      age: 22
    },
    {
      name: "Manuel",
      age: 21
    },
    {
      name: "Luis",
      age: 25
    },
    {
      name: "Pedro",
      age: 27
    },
  ] */

  changePrincipalUser (name : string) {
    console.log(name);
    this.pricipalUser = name

  }


  constructor(private api : ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe((data) => {
        this.users = data.map((user: any) => ({name: user.name, email: user.email}))
      })

  }

  goHome(): void {
    this.router.navigate(["/"])
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
