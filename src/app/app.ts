import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestinationsCardItem } from './destinations-card-item/destinations-card-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DestinationsCardItem],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tripo-front');


  destinations = [
    {
      id: 1,
      name: 'Paris',
      description: 'Paris is the capital of France',
      image: 'https://via.placeholder.com/150'
    }
  ]
}
