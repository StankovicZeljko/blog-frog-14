import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Blog, BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog-overview-page',
  templateUrl: './blog-overview-page.component.html',
  styleUrls: ['./blog-overview-page.component.scss'],
})
export class BlogOverviewPageComponent implements OnInit {
  blogs!: Blog[];

  constructor(private blogService: BlogService) {}

  async ngOnInit() {
    const result = await this.blogService.loadBlogs();
    this.blogs = result;
  }
}
