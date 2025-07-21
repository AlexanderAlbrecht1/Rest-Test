import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckComponent } from './duck.component';

describe('DuckComponent', () => {
  let component: DuckComponent;
  let fixture: ComponentFixture<DuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
