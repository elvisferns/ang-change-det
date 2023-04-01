import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-c2-comp',
  templateUrl: './c2-comp.component.html',
  styleUrls: ['./c2-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class C2CompComponent {
  #c2Input = '';
  @Input('c2Input')
  set c2Input(value: string) {
    console.log(`🚀 ~ c2-comp ~ setc2Input ~ value:`, value);
    this.#c2Input = value;
  }

  get c2Input() {
    return this.#c2Input;
  }

  ngOnChanges() {
    console.log(`c2-comp.component.ts ~ ngOnChanges`);
  }

  ngOnInit() {
    console.log(`c2-comp.component.ts ~ ngOnInit`);
  }

  ngDoCheck() {
    console.log(`c2-comp.component ~ ngDoCheck`);
  }

  ngAfterContentChecked() {
    console.log(`c2-comp.component ~ ngAfterContentChecked`);
  }

  ngAfterContentInit() {
    console.log(`c2-comp.component ~ ngAfterContentInit`);
  }

  ngAfterViewChecked() {
    console.log(`c2-comp.component ~ ngAfterViewChecked`);
  }

  ngAfterViewInit() {
    console.log(`c2-comp.component ~ ngAfterViewInit`);
  }
  triggerChangeDetection() {
    console.log(`🚀 ~ C2CompComponent ~ triggerChangeDetection`);
  }
}
