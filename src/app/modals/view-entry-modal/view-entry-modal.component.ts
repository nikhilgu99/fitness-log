import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FitnessItem } from '../../interfaces/fitness-item';

@Component({
  selector: 'app-view-entry-modal',
  standalone: true,
  imports: [],
  templateUrl: './view-entry-modal.component.html',
  styleUrl: './view-entry-modal.component.scss'
})
export class ViewEntryModalComponent {
  @Input() public fitnessItem!: FitnessItem;

  @Output() public closeModal: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log(this.fitnessItem);
  }

  close(deleteEntry: boolean) {
    this.closeModal.emit(deleteEntry);
  }
}
