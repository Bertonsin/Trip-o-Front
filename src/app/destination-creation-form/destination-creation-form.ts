import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-destination-creation-form',
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './destination-creation-form.html',
  styleUrl: './destination-creation-form.scss',
})
export class DestinationCreationForm {
  @Output() closeDialog = new EventEmitter<void>();
  destinationName = '';

  createDestination() {
    console.log(this.destinationName);
  }
}
