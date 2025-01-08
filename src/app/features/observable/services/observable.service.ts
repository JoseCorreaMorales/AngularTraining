import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export interface BehaviorSubjectData {
  name: 'Bahavior Subject info.'
}

export class ObservableService {

  private mybehaviorsubjectPrivate : BehaviorSubject<BehaviorSubjectData> = new BehaviorSubject();
  //myObservable$: Observable<any> = this.mybehaviorsubject.asObservable();

  constructor() { }

  get sharingObservable() {
    return this.mybehaviorsubjectPrivate.asObservable()
  }

  set sharingObservableData(data: BehaviorSubjectData) {
     this.mybehaviorsubjectPrivate.next(data)
  }
}
