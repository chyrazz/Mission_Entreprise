import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppotunityListComponent } from './opportunity-list.component';

describe('OppotunityListComponent', () => {
  let component: OppotunityListComponent;
  let fixture: ComponentFixture<OppotunityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OppotunityListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OppotunityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
