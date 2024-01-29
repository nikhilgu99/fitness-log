import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FitnessItem } from '../../interfaces/fitness-item';

@Component({
  selector: 'app-new-entry-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-entry-modal.component.html',
  styleUrl: './new-entry-modal.component.scss'
})
export class NewEntryModalComponent {

  @Output() public closeModalEmitter: EventEmitter<FitnessItem> = new EventEmitter();

  entryNameInput: string = "";
  entryDescriptionInput: string = "";

  public addEntry() {
    const entry: FitnessItem = {
      name: this.entryNameInput,
      description: this.entryDescriptionInput
    };

    this.closeModalEmitter.emit(entry);
  }

}
