import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, lastValueFrom, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailPageComponent implements OnInit, OnDestroy {

  destroy$ = new Subject();
  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((p) => {
      this.id = p['id'];
    });
  }

}
