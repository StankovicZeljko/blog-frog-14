import { Injectable } from '@angular/core';
import { State } from '../../../core/state/state';
import { Blog } from '../services/blog.service';

export type BlogState = {
  blogs: Blog[];
  loading: boolean;
  error?: string;
};

@Injectable()
export class BlogOverviewState extends State<BlogState> {
  constructor() {
    super({ loading: false, blogs: [], error: undefined });
  }
}
