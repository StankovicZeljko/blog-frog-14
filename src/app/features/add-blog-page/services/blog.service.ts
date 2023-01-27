import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Blog {
  content: string;
  title: string;
}


@Injectable()
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  addBlog(blog: Blog) {
    return lastValueFrom(this.httpClient.post(`${environment.serviceUrl}/entries`, blog));
  }
}
