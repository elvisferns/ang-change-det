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

@Component({
  selector: 'app-b-comp',
  templateUrl: './b-comp.component.html',
  styleUrls: ['./b-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BCompComponent
  implements OnChanges, DoCheck, AfterViewInit, AfterViewChecked
{
  cInputValue = 'cInput';
  @Input() title: string = '';
  @Input() inputData: string = '';
  @ViewChild('main', { static: true }) container: ElementRef | undefined;

  constructor(private ngZone: NgZone) {}

  ngOnChanges() {
    // console.log(`b-comp.component.ts ~ ngOnChanges`);
  }

  ngDoCheck() {
    console.log(`b-comp.component ~ ngDoCheck`);
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
    // console.log(`b-comp.component ~ ngAfterViewChecked`);
  }

  ngAfterViewInit() {
    // console.log(`b-comp.component ~ ngAfterViewInit`);
  }

  triggerChangeDetection() {
    this.cInputValue = `cInput - changed @${(new Date()).toLocaleString()}`;
  }
}
