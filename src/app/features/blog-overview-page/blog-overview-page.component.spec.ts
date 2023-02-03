import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';

import { BlogOverviewPageComponent } from './blog-overview-page.component';
import { BlogService } from './services/blog.service';
import { BlogOverviewState } from './state/blog-overview-state';

describe('BlogOverviewPageComponent', () => {
  let component: BlogOverviewPageComponent;
  let fixture: ComponentFixture<BlogOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOverviewPageComponent ],
      providers: [MockProvider(BlogService), MockProvider(BlogOverviewState)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
