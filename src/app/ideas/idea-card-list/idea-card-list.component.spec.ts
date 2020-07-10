import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaCardListComponent } from './idea-card-list.component';

describe('IdeaCardListComponent', () => {
  let component: IdeaCardListComponent;
  let fixture: ComponentFixture<IdeaCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
