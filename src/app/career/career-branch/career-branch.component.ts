import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-career-branch',
  templateUrl: './career-branch.component.html',
  styleUrls: ['./career-branch.component.scss'],
})
export class CareerBranchComponent implements AfterViewInit {
  @Input('year') year!: string;
  @Input('title') title!: string;
  @Input('right') right!: boolean;
  @Input('professional') professional!: boolean;

  @ViewChild('yearRef') yearRef!: ElementRef;
  @ViewChild('titleRef') titleRef!: ElementRef;

  private _intersectionObserver!: IntersectionObserver;
  constructor() {}

  ngAfterViewInit(): void {
    let options = {
      rootMargin: '0px 0px -20% 0px',
      threshold: 1.0,
    };
    this._intersectionObserver = new IntersectionObserver(
      (entries) => this.onIntersect(entries),
      options
    );
    this._intersectionObserver.observe(this.yearRef.nativeElement);
  }

  private onIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.yearRef.nativeElement.classList.add('show-year');
        return;
      }
    });
  }

  public showTitle(e: Event) {
    this.titleRef.nativeElement.classList.add('show-title');
  }
}
