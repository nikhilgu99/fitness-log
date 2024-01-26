import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEntryModalComponent } from './view-entry-modal.component';

describe('ViewEntryModalComponent', () => {
  let component: ViewEntryModalComponent;
  let fixture: ComponentFixture<ViewEntryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEntryModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEntryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
