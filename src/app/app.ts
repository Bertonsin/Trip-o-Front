import { Component, signal } from '@angular/core';
import { DestinationsCardItem } from './destinations-card-item/destinations-card-item';
import { AppHeader } from './app-header/app-header';
import { Destinations } from './destinations/destinations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DestinationCreationForm } from './destination-creation-form/destination-creation-form';

@Component({
  selector: 'app-root',
  imports: [DestinationsCardItem, AppHeader, Destinations, ButtonModule, DialogModule, DestinationCreationForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isDialogVisible = signal(false);
  protected readonly title = signal('tripo-front');

  destinations = [
    {
      id: 1,
      name: 'Paris',
      description: 'Paris is the capital of France',
      image: 'https://via.placeholder.com/150'
    }
  ]

  showDialog() {
    this.isDialogVisible.update(prev => !prev);
  }
}
