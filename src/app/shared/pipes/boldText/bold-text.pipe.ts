import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'boldText'
})
export class BoldTextPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {

    const boldText = value.replace(/${value}/g, '<strong>$&</strong>');
    return this.sanitizer.bypassSecurityTrustHtml(boldText);
  }
}
