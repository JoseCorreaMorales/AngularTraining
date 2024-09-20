import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme : string = "cupcake"

  setTheme(theme : string): void {
    document.documentElement.setAttribute('data-theme', theme)
    this.currentTheme = theme
  }

  getTheme() : string {
    return this.currentTheme
  }
  getSavedTheme(): string {
    return localStorage.getItem('selected-theme') || this.currentTheme;
  }
}
