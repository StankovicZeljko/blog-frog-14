import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { Subject, takeUntil } from 'rxjs';

export interface GridColumns {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[gridCols]',
})
export class ResponsiveGridColumnsDirective implements OnInit, OnDestroy {

  onDestroy$ = new Subject<void>();


  #gridCols: GridColumns = { xs: 1, sm: 2, md: 4, lg: 6, xl: 8 };
  public get gridCols(): GridColumns {
    return this.#gridCols;
  }

  @Input()
  public set gridCols(map: GridColumns | undefined) {
    if (map && 'object' === typeof map) {
      this.#gridCols = map;
    }
  }
  constructor(
    private grid: MatGridList,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    if (this.grid != null) {
      this.grid.cols = this.#gridCols.md;
    }
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((result) => {
        this.cdr.markForCheck();

        if (result.breakpoints[Breakpoints.XSmall]) {
          this.grid.cols = this.#gridCols.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.grid.cols = this.#gridCols.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.grid.cols = this.#gridCols.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.grid.cols = this.#gridCols.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.grid.cols = this.#gridCols.xl;
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
