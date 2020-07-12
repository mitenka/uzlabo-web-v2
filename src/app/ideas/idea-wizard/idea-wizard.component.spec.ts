import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaWizardComponent } from './idea-wizard.component';

describe('IdeaWizardComponent', () => {
  let component: IdeaWizardComponent;
  let fixture: ComponentFixture<IdeaWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
