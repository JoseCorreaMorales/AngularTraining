import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  themes : Array<string> = ['cupcake', 'pastel', 'retro', 'synthwave']
  currentTheme: string = 'default';


  constructor(private themeService : ThemeService) { }

  ngOnInit(): void {
  const savedTheme = localStorage.getItem('selected-theme') || 'default';
  this.changeTheme(savedTheme);
  }

  changeTheme(theme : string) : void {
    this.currentTheme = theme
    this.themeService.setTheme(theme)
    localStorage.setItem('selected-theme', theme);

  }

  toggleTheme(event: any) {
    console.log("toggle ", event.target.checked );
    const theme = event.target.checked ? 'synthwave' : 'default';
    this.changeTheme(theme);
  }


}
