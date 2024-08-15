import { Component, OnInit } from '@angular/core';

interface Person  {
  id: number,
  name: string,
}

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  styles: [
    `
    p {
      font-size: 2.2rem;
      text-align: center;
    }
    `
  ]
})
export class DirectivesComponent implements OnInit {
  condicion: boolean = true
   numbers : Array<any> = [1, 2, 3, 4, 5, 6]

   persons : Person[] = [
    {id : 1, name: "jose"},
    {id : 2, name: "juan"},
  ]


  trackByPersonById(item: any): number {
    console.log(item.id);
    return item.id;

  }

  constructor() { }

  ngOnInit(): void {
  }

  updateList() : void {
    this.persons = [
    {id : 1, name: "jose"},
    {id : 2, name: "manuel"},]
  }

}
