import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  private _subject: BehaviorSubject<string> = new BehaviorSubject('observable value');
  get observableValue(): Observable<string> {
    return this._subject.asObservable();
  }
  constructor() {}

  updateValue() {
    this._subject.next(`observable value changed @${(new Date()).toLocaleString()}`);
  }
}
