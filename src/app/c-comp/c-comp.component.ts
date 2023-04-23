import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-c-comp',
  templateUrl: './c-comp.component.html',
  styleUrls: ['./c-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CCompComponent
  implements OnChanges, DoCheck, AfterViewInit, AfterViewChecked
{
  localValue: string = 'localValue';
  dataValue: string = '';
  #cInput = '';
  @Input('cInput')
  set cInput(value) {
    // console.log(`c-comp.component.ts ~ setcInput`);
    this.#cInput = value;
  }
  get cInput() {
    return this.#cInput;
  }
  @ViewChild('main', { static: true }) container: ElementRef | undefined;

  constructor(private ngZone: NgZone, public fakeDataService: FakeDataService) {
    // fakeDataService.observableValue.subscribe((value) => {
    //   this.dataValue = value;
    // });
  }

  ngOnChanges() {
    // console.log(`c-comp.component.ts ~ ngOnChanges`);
  }

  ngDoCheck() {
    console.log(`c-comp.component ~ ngDoCheck`);
  }

  changeDetectCSS() {
    this.container?.nativeElement.classList.add('changed');
    this.ngZone.runOutsideAngular(() =>
      setTimeout(() => {
        this.container?.nativeElement.classList.remove('changed');
      }, 500)
    );
  }

  ngAfterViewChecked() {
    // console.log(`c-comp.component ~ ngAfterViewChecked`);
  }

  ngAfterViewInit() {
    // console.log(`c-comp.component ~ ngAfterViewInit`);
  }

  triggerChangeDetection() {
    // console.log(
    //   '🚀 ~ file: c-comp.component.ts:57 ~ triggerChangeDetection ~ triggerChangeDetection:'
    // );
    this.localValue = `local value - changed @${(new Date()).toLocaleString()}`;
  }

  ngOnDestroy() {}
}
