import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Blog, BlogService } from './services/blog.service';
import { BlogOverviewState, BlogState } from './state/blog-overview-state';

@Component({
  selector: 'app-blog-overview-page',
  templateUrl: './blog-overview-page.component.html',
  styleUrls: ['./blog-overview-page.component.scss'],
})
export class BlogOverviewPageComponent implements OnInit {
  state$: Observable<BlogState>;

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

  selectBlog(id: number) {
    this.router.navigate(['/detail/', id]);
  }
}
