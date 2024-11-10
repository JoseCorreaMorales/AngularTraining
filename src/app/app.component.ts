import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { ThemeService } from './core/services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  themes: Array<string> = ['cupcake', 'pastel', 'retro', 'synthwave', 'dracula']
  currentTheme: string = 'default';

  constructor(private router: Router, private viewportScroller: ViewportScroller, private themeService: ThemeService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const queryParamsIndex = event.url.indexOf('?');
        const currentPath = queryParamsIndex >= 0 ? event.url.substring(0, queryParamsIndex) : event.url;

        if (this.router.url.startsWith(currentPath)) {
          // dont move when queryParams changes
          return;
        }

        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('selected-theme') || 'default';
    this.changeTheme(savedTheme);
    console.log("theme");
  }

  changeTheme(theme: string): void {
    this.currentTheme = theme
    this.themeService.setTheme(theme)
    localStorage.setItem('selected-theme', theme);
    console.log("click");

  }
}
