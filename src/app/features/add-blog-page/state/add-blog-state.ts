import { Injectable } from '@angular/core';
import { State } from '../../../core/state/state';

export type BlogState = {
  loading: boolean;
  error?: string;
};

@Injectable()
export class AddBlogState extends State<BlogState> {
  constructor() {
    super({ loading: false, error: undefined });
  }
}
