import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

interface Comment {
  author: string;
  comment: string;
  date: Date;
}

export interface Blog {
  id: number;
  author: string;
  comments: Comment[];
  content: string;
  likedByMe: boolean;
  likes: number;
  title: string;
}
@Injectable()
export class BlogService {
  constructor(private httpClient: HttpClient) {}

  async loadBlogs() {
    return lastValueFrom(
      this.httpClient.get<Blog[]>(`${environment.serviceUrl}/entries`)
    );
  }
}
