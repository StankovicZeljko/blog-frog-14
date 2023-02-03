import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { runOnPushChangeDetection } from '../../testing/test-utils';

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

  it('it should display the title of the blog', () => {
    const titleElement = fixture.debugElement.query(By.css('[data-testid="title"]'));
    expect(titleElement.nativeElement.textContent).toContain('title');
  });

  it('should show the like button in black if the blog was not liked', () => {

    component.model = {
      author: 'author',
      title: 'title',
      id: 1,
      likedByMe: false,
    };

    runOnPushChangeDetection(fixture);

    const likeButton = fixture.debugElement.query(By.css('[data-testid="like-button-icon"]'));
    expect(likeButton.nativeElement.style.color).toBe('black');
  });

  it('should show the like button in red if the blog was liked', async () => {
    component.model = {
      id: 1,
      author: 'a author',
      likedByMe: true,
      title: 'A title'
    };
    runOnPushChangeDetection(fixture);

    const likeButton = fixture.debugElement.query(By.css('[data-testid="like-button-icon"]'));
    expect(likeButton.nativeElement.style.color).toBe('red');
  });

  it('should emit likeBlog$ if like Button was clicked', () => {

    let currentEvent: any;
    component.likeBlog$.subscribe(event => {
      currentEvent = event;
    });

    const likeButton = fixture.debugElement.query(
      By.css('[data-testid="like-button"]')
    );

    likeButton.triggerEventHandler('click', {});

    expect(currentEvent).toEqual({ id: 1, likedByMe: true });

  });


  // 1. OK it should display the title of the blog
  // 2. it should display the author on subtitle of the blog
  // 3. it should display an image
  // 4. it should have a alt image tag
  // 5. it should emit selectBlog$ on header click or image
  // 6. should show a like Button
  // 7. OK should show the like Button in red if likedByMe is true
  // 8. OK should emit likeBlog$ if like Button was clicked
  // 9. OK should show the like button in black if the blog was not liked

});
