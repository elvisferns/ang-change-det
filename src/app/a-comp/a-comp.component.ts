import { Component, Input } from '@angular/core';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-a-comp',
  templateUrl: './a-comp.component.html',
  styleUrls: ['./a-comp.component.scss'],
})
export class ACompComponent {
  b1InputData = 'b1InputData';
  b2InputData = 'b2InputData';

  constructor(private fakeDataService: FakeDataService) {
  }
  updateInputValueForB1() {
    this.b1InputData = `b1InputData - changed @ ${(new Date).toLocaleString()}`;
  }

  updateInputValueForB2() {
    this.b2InputData = `b2InputData - changed @ ${(new Date).toLocaleString()}`;
  }

  updateObservableValue() {
    this.fakeDataService.updateValue();
  }
}
