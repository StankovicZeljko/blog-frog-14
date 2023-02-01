import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, Observable, Subject, take, takeUntil, withLatestFrom } from 'rxjs';
import { Blog, BlogService } from './services/blog.service';
import { BlogOverviewState, BlogState } from './state/blog-overview-state';

@Component({
  selector: 'app-blog-overview-page',
  templateUrl: './blog-overview-page.component.html',
  styleUrls: ['./blog-overview-page.component.scss'],
})
export class BlogOverviewPageComponent implements OnInit {
  state$: Observable<BlogState>;
  destroy$ = new Subject();

  constructor(
    private blogService: BlogService,
    private blogOverviewState: BlogOverviewState,
    private router: Router
  ) {
    this.state$ = this.blogOverviewState.state$;
  }

  async ngOnInit() {
    this.blogOverviewState.setState({ loading: true });

    try {
      const result = await this.blogService.loadBlogs();
      this.blogOverviewState.setState({ loading: false, blogs: result });
    } catch (error) {
      this.blogOverviewState.setState({
        loading: false,
        error: (error as Error).message,
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }

  likeBlog(event: { id: number; likedByMe: boolean }) {
    this.blogService
      .likeBlog(event.id, event.likedByMe)
      .pipe(first(), withLatestFrom(this.state$), takeUntil(this.destroy$))
      .subscribe(([, state]) => {
        const index = state.blogs.findIndex((b) => b.id === event.id);
        state.blogs[index] = {
          ...state.blogs[index],
          likedByMe: !event.likedByMe,
        };
        this.blogOverviewState.setState(state);
      });
  }

  selectBlog(id: number) {
    this.router.navigate(['/detail/', id]);
  }
}
