import { Component, signal } from '@angular/core';
import { DestinationsCardItem } from './destinations-card-item/destinations-card-item';
import { AppHeader } from './app-header/app-header';
import { Destinations } from './destinations/destinations';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [DestinationsCardItem, AppHeader, Destinations],
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
