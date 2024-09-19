import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-presentation',
  templateUrl: './initial-presentation.component.html',
  styleUrls: ['./initial-presentation.component.css']
})
export class InitialPresentationComponent implements OnInit {
  textURL : string = "helloAngular"
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  scrollContent = () : void => {
    const element = document.getElementById('counter')
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }

  }

  navigateToRontingExample() : void {
    this.router.navigate(['/routing', this.textURL])
  }

}
