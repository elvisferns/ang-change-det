import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-b-comp',
  templateUrl: './b-comp.component.html',
  styleUrls: ['./b-comp.component.scss'],
})
export class BCompComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{

  cInputValue = 'cInput';
  ngOnChanges() {
    console.log(`b-comp.component.ts ~ ngOnChanges`);
  }

  ngOnInit() {
    console.log(`b-comp.component.ts ~ ngOnInit`);
  }

  ngDoCheck() {
    console.log(`b-comp.component ~ ngDoCheck`);
  }

  ngAfterContentChecked() {
    console.log(`b-comp.component ~ ngAfterContentChecked`);
  }

  ngAfterContentInit() {
    console.log(`b-comp.component ~ ngAfterContentInit`);
  }

  ngAfterViewChecked() {
    console.log(`b-comp.component ~ ngAfterViewChecked`);
  }

  ngAfterViewInit() {
    console.log(`b-comp.component ~ ngAfterViewInit`);
  }

  triggerChangeDetection() {
    this.cInputValue = `cInput - changed @${new Date()}`;
  }
}
