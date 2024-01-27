import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FitnessItem } from '../../interfaces/fitness-item';

@Component({
  selector: 'app-new-entry-modal',
  standalone: true,
  imports: [],
  templateUrl: './new-entry-modal.component.html',
  styleUrl: './new-entry-modal.component.scss'
})
export class NewEntryModalComponent {

  @Output() public closeModalEmitter: EventEmitter<FitnessItem> = new EventEmitter();

  @ViewChild('entryNameInput')
  entryNameInput!: ElementRef;

  @ViewChild('entryDescriptionInput')
  entryDescriptionInput!: ElementRef;

  public addEntry() {
    const entry: FitnessItem = {
      name: this.entryNameInput.nativeElement.value,
      description: this.entryDescriptionInput.nativeElement.value
    };

    this.closeModalEmitter.emit(entry);
  }

}
