import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export type BlogModel = {
  author: string;
  title: string;
  id: number;
}


@Component({
  selector: 'app-blog-overview-card',
  templateUrl: './blog-overview-card.component.html',
  styleUrls: ['./blog-overview-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogOverviewCardComponent implements OnInit {

  @Input() model!: BlogModel;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
