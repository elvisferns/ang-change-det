import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-b2-comp',
  templateUrl: './b2-comp.component.html',
  styleUrls: ['./b2-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B2CompComponent {
  c2InputValue = 'c2InputValue';

  triggerChangeDetection() {
    this.c2InputValue = `c2InputValue - updated @${new Date()}`;
    setTimeout(() => {
      console.log(`B2CompComponent ~ setTimeout called`);
      this.c2InputValue = `c2InputValue - updated @${new Date()}`;
    }, 5000);
  }

  ngOnChanges() {
    console.log(`b2-comp.component.ts ~ ngOnChanges`);
  }

  ngOnInit() {
    console.log(`b2-comp.component.ts ~ ngOnInit`);
  }

  ngDoCheck() {
    console.log(`b2-comp.component ~ ngDoCheck`);
  }

  ngAfterContentChecked() {
    console.log(`b2-comp.component ~ ngAfterContentChecked`);
  }

  ngAfterContentInit() {
    console.log(`b2-comp.component ~ ngAfterContentInit`);
  }

  ngAfterViewChecked() {
    console.log(`b2-comp.component ~ ngAfterViewChecked`);
  }

  ngAfterViewInit() {
    console.log(`b2-comp.component ~ ngAfterViewInit`);
  }
}
