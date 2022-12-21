import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export type BlogModel = {
  author: string;
  title: string;
  id: number;
};

@Component({
  selector: 'app-blog-overview-card',
  templateUrl: './blog-overview-card.component.html',
  styleUrls: ['./blog-overview-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogOverviewCardComponent implements OnInit {
  @Input() model!: BlogModel;
  @Input() index!: number;
  @Output('blogSelected') blogSelected$ = new EventEmitter<number>();

  ngOnInit(): void {}

  selectBlog() {
    this.blogSelected$.emit(this.model.id);
  }
}
