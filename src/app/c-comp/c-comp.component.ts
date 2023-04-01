import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-c-comp',
  templateUrl: './c-comp.component.html',
  styleUrls: ['./c-comp.component.scss'],
})
export class CCompComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  #cInput = '';
  @Input('cInput')
  set cInput(value) {
    console.log(`c-comp.component.ts ~ setcInput`);
    this.#cInput = value;
  }

  get cInput() {
    return this.#cInput;
  }

  ngOnChanges() {
    console.log(`c-comp.component.ts ~ ngOnChanges`);
  }

  ngOnInit() {
    console.log(`c-comp.component.ts ~ ngOnInit`);
  }

  ngDoCheck() {
    console.log(`c-comp.component ~ ngDoCheck`);
  }

  ngAfterContentChecked() {
    console.log(`c-comp.component ~ ngAfterContentChecked`);
  }

  ngAfterContentInit() {
    console.log(`c-comp.component ~ ngAfterContentInit`);
  }

  ngAfterViewChecked() {
    console.log(`c-comp.component ~ ngAfterViewChecked`);
  }

  ngAfterViewInit() {
    console.log(`c-comp.component ~ ngAfterViewInit`);
  }
}
