import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewEntryModalComponent } from '../modals/new-entry-modal/new-entry-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private modalService: NgbModal
  ) { }

  public openModal() {
    const modalRef = this.modalService.open(NewEntryModalComponent);
  }
}
