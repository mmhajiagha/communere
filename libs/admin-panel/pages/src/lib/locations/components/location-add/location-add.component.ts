import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.scss']
})
export class LocationAddComponent {
  title: string = '';
  @Output() onSubmitLocation: EventEmitter<any> = new EventEmitter<any>;
  @Output() onAddLocation: EventEmitter<any> = new EventEmitter<any>;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>;
  componentMode: 'ADD' | 'LIST' = 'LIST';

  onAddLocationClick() {
    this.componentMode = 'ADD';
    this.onAddLocation.emit();
  }

  onCloseClick() {
    this.componentMode = 'LIST';
    this.onClose.emit();
  }

  onSubmitLocationClick() {
    this.componentMode = 'LIST';
    this.onSubmitLocation.emit(this.title);
    this.title = '';
  }
}
