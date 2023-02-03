import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOverviewCardComponent } from './blog-overview-card.component';

describe('BlogOverviewCardComponent', () => {
  let component: BlogOverviewCardComponent;
  let fixture: ComponentFixture<BlogOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOverviewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogOverviewCardComponent);
    component = fixture.componentInstance;

    component.model = { author: 'author', title: 'title', id: 1, likedByMe: true };
    component.index = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
