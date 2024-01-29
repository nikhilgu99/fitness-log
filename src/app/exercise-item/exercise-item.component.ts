import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEntryModalComponent } from '../modals/view-entry-modal/view-entry-modal.component';
import { FitnessItem } from '../interfaces/fitness-item';

@Component({
  selector: 'exercise-item',
  standalone: true,
  imports: [],
  templateUrl: './exercise-item.component.html',
  styleUrl: './exercise-item.component.scss'
})
export class ExerciseItemComponent {
  constructor(
    private modalService: NgbModal
  ) { }

  @Input() public FitnessInfo!: FitnessItem;

  @Output() public deleteEntryEmitter: EventEmitter<string> = new EventEmitter();

  public openViewEntryModal() {
    const fitnessItem: FitnessItem = {
      description: this.FitnessInfo.description,
      name: this.FitnessInfo.name
    };

    const modalRef = this.modalService.open(ViewEntryModalComponent);
    modalRef.componentInstance.fitnessItem = fitnessItem;

    modalRef.componentInstance.closeModalEmitter.subscribe((deleteEntryName: string) => {
      this.deleteEntryEmitter.emit(deleteEntryName);
      this.modalService.dismissAll();
    })
  }
}
