import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Toast } from './layout/toast/toast';
import { Loader } from './layout/loader/loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Toast, Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-v21-app');
}
