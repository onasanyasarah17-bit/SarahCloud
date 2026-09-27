import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalWebApp } from './educational-web-app';

describe('EducationalWebApp', () => {
  let component: EducationalWebApp;
  let fixture: ComponentFixture<EducationalWebApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalWebApp],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationalWebApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
