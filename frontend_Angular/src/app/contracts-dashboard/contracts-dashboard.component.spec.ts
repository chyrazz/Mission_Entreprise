import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsDashboardComponent } from './contracts-dashboard.component';

describe('ContractsDashboardComponent', () => {
  let component: ContractsDashboardComponent;
  let fixture: ComponentFixture<ContractsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
