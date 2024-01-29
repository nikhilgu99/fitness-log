import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewEntryModalComponent } from '../modals/new-entry-modal/new-entry-modal.component';
import { FitnessItem } from '../interfaces/fitness-item';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private modalService: NgbModal
  ) { }

  @Input() addSuccess: boolean | undefined = undefined;

  @Output() public addEntryEmitter: EventEmitter<FitnessItem> = new EventEmitter();

  public openNewEntryModal() {
    this.addSuccess = undefined; //Hide any visible alert

    const modalRef = this.modalService.open(NewEntryModalComponent);

    modalRef.componentInstance.closeModalEmitter.subscribe((newEntry: FitnessItem) => {
      this.addEntryEmitter.emit(newEntry);
      this.modalService.dismissAll();
    })
  }
}
