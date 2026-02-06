import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second-component/second-component';

@Component({
  selector: 'app-root',
  imports: [SecondComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Gumalal_Alexandra_fila_a');
  name = 'app';
}
