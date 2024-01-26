import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEntryModalComponent } from '../modals/view-entry-modal/view-entry-modal.component';

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

  public openViewEntryModal() {
    const modalRef = this.modalService.open(ViewEntryModalComponent);
  }
}
