import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter : number = 0;

  toggleEmoji : boolean = true;

  viewMode : string = 'list';

  toggleContent() {
    this.toggleEmoji = !this.toggleEmoji;
    this.viewMode = this.viewMode === 'list' ? 'map' : 'list';
  }


  count() : void {
    this.counter++;
  }

  count2 = () : void =>  {
     this.counter++;
  }

  decrement() : void {
    this.counter--;
  }


  goToUserList() : void {
    this.router.navigate(['/users'])
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
}
