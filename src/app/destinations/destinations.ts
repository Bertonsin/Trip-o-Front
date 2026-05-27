import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { DestinationService } from '../../service/destination-service';
import { DestinationsCardItem } from '../destinations-card-item/destinations-card-item';

@Component({
  selector: 'app-destinations',
  imports: [DestinationsCardItem],
  templateUrl: './destinations.html',
  styleUrl: './destinations.scss',
})
export class Destinations {

  destinations = signal<any[]>([{
    id: 1,
    name: 'Paris',
    description: 'Paris is the capital of France',
    image: 'https://via.placeholder.com/150'
  }]);

  ngOnInit() {
    this.getDestinations();
  }

  constructor(private destinationService: DestinationService) {
  }

  getDestinations() {
    this.destinationService.getDestinations().subscribe((data: any) => {
      this.destinations.set(data);
    });
  }
}
