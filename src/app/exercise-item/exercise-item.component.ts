import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

  @ViewChild('exerciseItemTitle')
  exerciseItemTitle!: ElementRef;

  @ViewChild('exerciseItemDescription')
  exerciseItemDescription!: ElementRef;

  public openViewEntryModal() {
    const fitnessItem: FitnessItem = {
      description: this.exerciseItemDescription.nativeElement.innerText,
      name: this.exerciseItemTitle.nativeElement.innerText
    };

    const modalRef = this.modalService.open(ViewEntryModalComponent);
    modalRef.componentInstance.fitnessItem = fitnessItem;

    modalRef.componentInstance.closeModalEmitter.subscribe((deleteEntryName: string) => {
      this.deleteEntryEmitter.emit(deleteEntryName);
      this.modalService.dismissAll();
    })
  }
}
