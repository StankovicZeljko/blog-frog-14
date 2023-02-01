import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

export interface BlogModel {
  author: string;
  title: string;
  id: number;
  likedByMe: boolean;
}

@Component({
  selector: 'app-blog-overview-card',
  templateUrl: './blog-overview-card.component.html',
  styleUrls: ['./blog-overview-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogOverviewCardComponent {

  @Input() model!: BlogModel;
  @Input() index!: number;
  @Output('likeBlog') likeBlog$ = new EventEmitter<{ id: number, likedByMe: boolean}>();
  @Output('selectBlog') selectBlog$ = new EventEmitter<number>();

}