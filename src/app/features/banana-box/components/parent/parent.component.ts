import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  text: string = ""

  constructor(cd : ChangeDetectorRef) {
    /* setTimeout(() => {
      this.text = 'new text on timeout'
      cd.detectChanges()
    }, 5000); */

   }
  ngOnInit(): void {
  }

  handleClick() {
    this.text = "Parent. 💫"
  }



}
