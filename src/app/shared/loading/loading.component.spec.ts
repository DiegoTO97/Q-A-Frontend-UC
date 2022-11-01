import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loadingComponent } from './loading.component';

describe('loadingComponent', () => {
  let component: loadingComponent;
  let fixture: ComponentFixture<loadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ loadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(loadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
