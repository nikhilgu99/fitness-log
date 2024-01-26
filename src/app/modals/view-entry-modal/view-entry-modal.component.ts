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

  @Output() public closeModalEmitter: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    console.log(this.fitnessItem);
  }

  public close(deleteEntry: boolean) { //TODO: Check bool and implement edit
    this.closeModalEmitter.emit(this.fitnessItem.name);
  }
}
