import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter = 0;

  toggle = false;

  viewMode = 'list';

  toggleContent() {
    this.toggle = !this.toggle;
    this.viewMode = this.viewMode === 'list' ? 'map' : 'list';
  }


  count() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }


  goToUserList() {
    this.router.navigate(['/users'])
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
