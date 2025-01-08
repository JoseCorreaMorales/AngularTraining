import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectData, ObservableService } from '../../services/observable.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  data$ : Observable<BehaviorSubjectData>;

  constructor(observableService : ObservableService) { 
    this.data$ = observableService.sharingObservable;

  }

  ngOnInit(): void {
  }

}
