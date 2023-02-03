import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';

import { AddBlogPageComponent } from './add-blog-page.component';
import { BlogService } from './services/blog.service';
import { AddBlogState } from './state/add-blog-state';

describe('AddBlogPageComponent', () => {
  let component: AddBlogPageComponent;
  let fixture: ComponentFixture<AddBlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogPageComponent ],
      providers: [MockProvider(BlogService), MockProvider(AddBlogState)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
