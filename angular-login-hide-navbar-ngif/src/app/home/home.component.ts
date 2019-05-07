import { Component } from '@angular/core';
import { Hero } from './hero';
import { MatProgressButtonOptions } from 'mat-progress-buttons'

@Component({
  selector: 'app-home',
  templateUrl: './home-form.component.html',
  styles: ['./home-form.component.scss']
})
export class HomeComponent {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Hero(this.powers[0]);

submitted = false;

onSubmit() { this.submitted = true; }


barButtonOptions: MatProgressButtonOptions = {
  active: false,
  text: 'Submit your choice',
  buttonColor: 'accent',
  barColor: 'primary',
  raised: true,
  stroked: false,
  mode: 'indeterminate',
  value: 0,
  disabled: false
}
someFunc2(): void {
  this.barButtonOptions.active = true;
  this.barButtonOptions.text = 'Building the files';
  setTimeout(() => {
    this.barButtonOptions.active = false;
    this.barButtonOptions.text = 'try once more';
  }, 3500)
}

}
