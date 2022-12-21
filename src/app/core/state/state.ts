import { BehaviorSubject, Observable, scan, Subject } from 'rxjs';

export class State<T> {
  state$: Observable<T>;

  private subject$: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.subject$ = new BehaviorSubject<T>(initialState);

    this.state$ = this.subject$.pipe(
      scan((prev, curr) => {
        console.log('previous state:', prev);
        console.log('current state change:', curr);
        const nextState = { ...prev, ...curr };
        console.log('next state:', nextState);
        return nextState;
      })
    );
  }

  setState(state: Partial<T>) {
    this.subject$.next(state as T);
  }
}
