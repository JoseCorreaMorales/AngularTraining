import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-presentation',
  templateUrl: './initial-presentation.component.html',
  styleUrls: ['./initial-presentation.component.css']
})
export class InitialPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollContent = () : void => {
    const element = document.getElementById('counter')
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }

  }

}
