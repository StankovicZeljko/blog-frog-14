import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailPageComponent implements OnInit {

  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.id = p['id'];
    });
  }

}
