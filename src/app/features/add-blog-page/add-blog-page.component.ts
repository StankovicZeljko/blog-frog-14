import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.scss']
})
export class AddBlogPageComponent implements OnInit {

  constructor() {
    throw new Error('This is a test error');
   }

  ngOnInit(): void {
  }

}
