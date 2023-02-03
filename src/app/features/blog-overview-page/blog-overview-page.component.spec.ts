import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent, MockDirective, MockProvider, ngMocks } from 'ng-mocks';
import { BlogOverviewCardComponent } from '../../shared/blog-overview-card/blog-overview-card.component';
import { ResponsiveGridColumnsDirective } from '../../shared/responsive-grid-columns/responsive-grid-columns.directive';

import { BlogOverviewPageComponent } from './blog-overview-page.component';
import { BlogService } from './services/blog.service';
import { BlogOverviewState } from './state/blog-overview-state';

describe('BlogOverviewPageComponent', () => {
  let component: BlogOverviewPageComponent;
  let fixture: ComponentFixture<BlogOverviewPageComponent>;
  let blogOverviewState: BlogOverviewState;
  let router: Router;
  let blogService: BlogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogOverviewPageComponent,
        MockComponent(MatProgressSpinner),
        MockComponent(BlogOverviewCardComponent),
        MockDirective(ResponsiveGridColumnsDirective)],
      providers: [
        MockProvider(BlogService, { loadBlogs: jasmine.createSpy('loadBlogs')}),
        BlogOverviewState,
        MockProvider(Router, {
          navigate: jasmine.createSpy('navigate').and.returnValue(Promise.resolve(true))
        })
      ],
      imports: [
        CommonModule,
        RouterTestingModule,
        MatGridListModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    blogOverviewState = TestBed.inject(BlogOverviewState);
    router = TestBed.inject(Router);
    blogService = TestBed.inject(BlogService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show spinner on loading', () => {

    blogOverviewState.setState({ loading: true });
    fixture.detectChanges();

    const matSpinnerElement = ngMocks.find(MatProgressSpinner);
    expect(matSpinnerElement).not.toBeNull();
  });

  it('should load Blogs on create', () => {
    expect(blogService.loadBlogs).toHaveBeenCalled();
  });

  it('should navigate to detail if selectBlog emits', () => {

    blogOverviewState.setState({ loading: false, blogs: [{ id: 1, title: 'a title'}]} as any);
    fixture.detectChanges();

    const blogOverviewCardComponent = ngMocks.find(BlogOverviewCardComponent).componentInstance;
    blogOverviewCardComponent.selectBlog$.emit(1);

    expect(router.navigate).toHaveBeenCalledWith(['/detail/', 1]);
  });

});


// 1. OK should show spinner on loading
// 2. should show error on error
// 3. should render BlogOverviewCardComponent
// 4. OK should navigate to detail if selectBlog emits
// 5. should call put likeBlog if likeBlog emits
// 6. should load Blogs on create
